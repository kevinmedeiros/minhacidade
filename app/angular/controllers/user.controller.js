/**
 * Created by Josue on 21/07/2017.
 */

'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('userController', userController )

    userController.$inject = ["$scope","$rootScope", "$location", "userService"];

    function userController($scope, $rootScope, $location, userService) {

        this.userState = '';
        this.states = ('Estado Paraíba').split(' ').map(function (state) { return { abbrev: state }; });

        this.userCity = '';
        this.citys = ["Cidade", "João Pessoa"];

        this.sendData = function () {

            $rootScope.header = true;
            $rootScope.sidnav = true;
            userService.setState(this.userState);
            userService.setCity(this.userCity);

            $rootScope.city = userService.getCity();
            $rootScope.state = userService.getState();

            $location.path("/");
        };

    }
})();