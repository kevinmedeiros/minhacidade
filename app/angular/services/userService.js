/**
 * Created by Josue on 05/07/2017.
 */



(function () {
    "use strict";

    angular.module("Minhacidade").factory("userService", userService);

    userService.$inject = ['$http', 'minhacidadeURL', '$cookieStore'];

    function userService($http, minhacidadeURL, $cookieStore){
        return ({
            getState: getState,
            getCity: getCity,
            setState: setState,
            setCity: setCity,
            logout: logout
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

        function getState(){
            return $cookieStore.get('state');
        }

        function getCity(){
            return $cookieStore.get('city');
        }

        function setState(state){
            $cookieStore.put('state', state );
        }

        function setCity(city){
            $cookieStore.put('city', city);
        }

        function logout(){
            $cookieStore.remove('state');
            $cookieStore.remove('city');
        }
    }

})();