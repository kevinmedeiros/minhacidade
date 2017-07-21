/**
 * Created by Josue on 20/07/2017.
 */
'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('vocesabiaController', vocesabiaController )

    vocesabiaController.$inject = ["$scope"];

    function vocesabiaController($scope) {

        $scope.helloword = "vocesabia";

    }
})();