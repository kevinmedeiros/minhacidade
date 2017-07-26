/**
 * Created by Josue on 19/07/2017.
 */
'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('orcamentoController', orcamentoController )

    orcamentoController.$inject = ["$scope"];

    function orcamentoController($scope) {

        $scope.labels = ["Administração", "Saúde", "Segurança", "Tele Sales", "Corporate Sales"];
        $scope.data = [2000.90, 500, 23900.90, 40, 120];

    }
})();

