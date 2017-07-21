/**
 * Created by Josue on 20/07/2017.
 */

(function(){

    angular.module('Minhacidade')
        .controller('areasController', areasController )

    areasController.$inject = ["$scope"];

    function areasController($scope) {

        $scope.helloword = "areas";

    }
})();