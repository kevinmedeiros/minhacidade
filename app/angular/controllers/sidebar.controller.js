/**
 * Created by Josue on 27/07/2017.
 */
(function(){

    angular.module('Minhacidade')
        .controller('sidebarController', sidebarController )
        .controller('leftCtrl', leftCtrl)
        .controller('rightCtrl', rightCtrl)

    sidebarController.$inject = ["$scope", '$timeout','$interval', '$mdSidenav', '$log'];
    leftCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];
    rightCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];

    function sidebarController($scope,$timeout, $interval, $mdSidenav, $log) {
        console.log("controller sidbar iniciado")
        $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
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

        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
    }

    function leftCtrl($scope, $interval, $mdSidenav, $log){
        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    }

    function rightCtrl($scope, $interval, $mdSidenav, $log){
        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    }

})();
