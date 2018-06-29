angular.module('worldcup', [])
    .controller("Mundialista", function ($scope, $http) {
        var mundial = this;
        mundial.datos = [];
        $http.get('json/worldcup.json').then(async function (response) {
            for (var i = 0; i < response.data.length; i++) {
                datos = response.data[i];
                datos.home_team.code2Digits = await mundial.getCode(datos.home_team.code);
                datos.away_team.code2Digits = await mundial.getCode(datos.away_team.code);
                mundial.datos.push(datos);
            }
        });
        mundial.getCode = async function (code) {
            let info = await $http.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
            if(info.status==200){
                return info.data.alpha2Code;    
            }
            return "";
        };
    })