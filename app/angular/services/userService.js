/**
 * Created by Josue on 05/07/2017.
 */



(function () {
    "use strict";

    angular.module("Minhacidade").factory("userService", userService);

    userService.$inject = ['$http', 'minhacidadeURL'];

    function userService($http, minhacidadeURL){
        return ({
            postLocation: postLocation,
            getLocation: getLocation
        });

        function postLocation(config){

            return $http({
                method: 'POST',
                url: minhaCidadeIURL.API_URL + minhaCidadeIURL.AREA + minhaCidadeIURL.SAUDE + "2017",
            }).then(getGastosSaudeSucess, getGastosSaudeError );

            function postLocationSucess(response){
                return response;
            }

            function postLocationError(error){
                console.log('MSG: Error on userService request - postLocationFailed - ERROR: ');
            }
        }
    }

})();