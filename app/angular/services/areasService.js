/**
 * Created by Josue on 26/07/2017.
 */
(function () {
    "use strict";

    angular.module("Minhacidade").factory("areaService", areaService);

    areaService.$inject = ['$http', 'minhacidadeURL', '$cookieStore'];

    function areaService($http, minhacidadeURL){
        return ({
            getDadosGastometro: getDadosGastometro,
            getDadosArea: getDadosArea
        });


        function getDadosGastometro(){

            return $http({
                method: 'GET',
                url: minhacidadeURL.API_URL + "joao-pessoa"
            }).then(getDadosGastometroSucess, getDadosGastometroError );

            function getDadosGastometroSucess(response){
                return response;
            }

            function getDadosGastometroError(error){
                console.log('MSG: Error on areasService request - getDadosGastometroFailed - ERROR: ');
            }
        }

        function getDadosArea(id){
            return $http({
                method: 'GET',
                url: minhacidadeURL.API_URL + "joao-pessoa"+"?ano=2017&area="+id
            }).then(getDadosAreaSucess, getDadosAreaError );

            function getDadosAreaSucess(response){
                return response;
            }

            function getDadosAreaError(error){
                console.log('MSG: Error on areasService request - getDadosAreaFailed - ERROR: ');
            }
        }

    }

})();