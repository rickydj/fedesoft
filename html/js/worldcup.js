angular.module('worldcup', [])
    .controller("Mundialista", function ($scope, $http) {
        var mundial = this;
        mundial.datos = [];
        $http.get('json/worldcup.json').then(function (response) {
            mundial.datos = response.data;
        })
    })