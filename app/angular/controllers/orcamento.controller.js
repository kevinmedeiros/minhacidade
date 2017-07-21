/**
 * Created by Josue on 19/07/2017.
 */
'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('orcamentoController', orcamentoController )

    orcamentoController.$inject = ["$scope"];

    function orcamentoController($scope) {

        $scope.helloword = "orçamento";

    }
})();

