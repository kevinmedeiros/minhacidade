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
                const days_month = [
                    {   id: 0,
                        days: 31
                    },
                    {   id: 1,
                        days: 28
                    },
                    {   id: 2,
                        days: 31
                    },
                    {   id: 3,
                        days: 30
                    },
                    {   id: 4,
                        days: 31
                    },
                    {   id: 5,
                        days: 30
                    },
                    {   id: 6,
                        days: 31
                    },
                    {   id: 7,
                        days: 31
                    },
                    {   id: 8,
                        days: 30
                    },
                    {   id: 9,
                        days: 31
                    },
                    {   id: 10,
                        days: 30
                    },
                    {   id: 11,
                        days: 31
                    }
                ];
                var gastos_ano_saude = 2443432.767;
                var segundos_ano = 31536000;
                var gasto_segundo = gastos_ano_saude / segundos_ano;
                var today = new Date();

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

                console.log(daysToSegonds(today));

                function minutsToSeconds(value){

                    return (value.getMinutes() * 60);

                }

                function hoursToSegonds(value){
                    return ((value.getHours() * 60) * 60);
                }

                function daysToSegonds(value){

                    return value.getDate() * hoursToSegonds(value);
                }
            }

        }
    }

})();
