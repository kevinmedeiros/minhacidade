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
                var segundos_ano = 31536000;

                console.log(new Date().getMonth());
                $interval(function(){
                    if($scope.centavos.toString().length >= 3){
                        $scope.centavos = 0;
                        if($scope.mil > 999){
                            $scope.mil = 0;
                        }else{
                            $scope.mil++;
                        }

                    }else{
                        $scope.centavos++;
                    }

                //    Pega o valor de gasto no ano 100
                //    31,536,000



                },1000);
            }

        }
    }

})();
