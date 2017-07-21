'use strict';

(function(){
    angular.module('Minhacidade')
        .controller('indexController', indexController)

        indexController.$inject = ["$scope","$location",'$timeout', '$mdSidenav', '$log'];


        function indexController($scope,$location, $timeout, $mdSidenav, $log) {
            var vm = this;

            vm.areas = ["Gastro"];

            $scope.toggleLeft = buildDelayedToggler('left');
            $scope.isOpenRight = function(){
                return $mdSidenav('right').isOpen();
            };

            function debounce(func, wait, context) {
                var timer;

                return function debounced() {
                    var context = $scope,
                        args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function() {
                        timer = undefined;
                        func.apply(context, args);
                    }, wait || 10);
                };
            }

            function buildDelayedToggler(navID) {
                return debounce(function() {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }, 200);
            }

            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });

            };

            this.userState = '';
            this.states = ('Estado Paraíba').split(' ').map(function (state) { return { abbrev: state }; });

            this.userCity = '';
            this.citys = ["Cidade", "João Pessoa"];

            this.sendData = function () {
                $location.path("/view2");
            };

        }
})();


