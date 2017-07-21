/**
 * Created by Josue on 21/07/2017.
 */
'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('sobreController', sobreController )

    sobreController.$inject = ["$scope"];

    function sobreController($scope) {

        $scope.helloword = "Sobre";

    }
})();