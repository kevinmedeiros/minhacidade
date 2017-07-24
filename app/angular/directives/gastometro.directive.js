/**
 * Created by Josue on 23/07/2017.
 */

'use strict';

(function(){
    angular
        .module("Minhacidade")
        .directive("gastometro", gastometro);


    gastometro.$inject = ['$parse', '$http', '$sce', '$interval'];

    function gastometro($parse, $http, $sce, $interval){
        return {
            restrict: 'AE',
            templateUrl: 'partials/gastometro/gastometro.html',
            scope: {
                "id": "@id",
                "tipo": "@tipo"
            },
            link: function($scope, alem, attrs){

                $scope.milhoes = 0;
                $scope.centavos = 0;
                $scope.mil = 0;

                $interval(function(){
                    console.log($scope.centavos.toString().length);
                    if($scope.centavos.toString().length >= 3){
                        console.log($scope.centavos.toString().length);
                        $scope.centavos = 0;
                        console.log($scope.centavos);
                        if($scope.mil > 999){
                            $scope.mil = 0;
                        }else{
                            $scope.mil++;
                        }

                    }else{
                        $scope.centavos++;
                    }
                    // if($scope.milhoes.toString().length == 3){
                    //     $scope.milhoes = 0;
                    // }else{
                    //     $scope.milhoes++;
                    // }

                },1000);
            }

        }
    }

})();
