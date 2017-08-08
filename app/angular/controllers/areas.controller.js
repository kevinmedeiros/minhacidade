/**
 * Created by Josue on 20/07/2017.
 */

(function(){

    angular.module('Minhacidade')
        .controller('areasController', areasController )
        .controller('detailsAreaController', detailsAreaController)

    areasController.$inject = ['$scope','areaService', '$mdDialog'];
    detailsAreaController.$inject = ['$scope','areaService', '$mdDialog', 'detailID'];

    function areasController($scope, areaService, $mdDialog) {
        var vm = this;
        // vm.areas = [];
        $scope.showTabDialog = showTabDialog;

        vm.gastometros = [];

        // areaService.getDadosGastometro().then(function(response){
        //     console.log(response.data.gastometro);
        //     angular.forEach(response.data.gastometro, function(value){
        //         vm.areas.push(value);
        //     });
        // });

        areaService.getDadosGastometro().then(function(response){
            angular.forEach(response.data.gastometro, function(value){
                vm.gastometros.push(value);
            });
        });


        function showTabDialog(ev,id) {
            console.log(id);
            return $mdDialog.show({
                controller: detailsAreaController,
                controllerAs: 'vm',
                templateUrl: 'partials/areas/details.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals : {
                    detailID : id
                },
                clickOutsideToClose:true
            });
        }
    }

    function detailsAreaController($scope, areaService, $mdDialog,detailID){
        var vm = this;
        vm.detail = [];
        $scope.year = '';

        $scope.labels = [2009, 2010, 2012, 2013];
        $scope.data = [[1000000, 2000000, 4000000, 61000000]];

        $scope.optionsChart = {
            datasets: [{
                data: $scope.data,
                backgroundColor: 'rgb(0, 176, 255)',
                borderColor: 'rgb(0, 176, 255)',
                fill: false
            }],
            legend: {
                display: false
            },
            responsive : true,
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                    }
                }]
            }

        };


        $scope.areas = [];

        areaService.getDadosGastometro().then(function(response){
            angular.forEach(response.data.gastometro, function(value){
                // $scope.labels.push( value.area);
                // $scope.data.push((value.empenhado));
                // $scope.areas.push(value);

            });
        });

        $scope.selected = [];
        $scope.limitOptions = [5, 10, 15];

        $scope.options = {
            rowSelection: false,
            multiSelect: false,
            autoSelect: false,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: false,
            pageSelect: false
        };

        $scope.query = {
            order: 'area',
            limit: 5,
            page: 1
        };

        $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };

        $scope.loadStuff = function () {
            $scope.promise = $timeout(function () {
                // loading
            }, 2000);
        }

        $scope.logItem = function (item) {
            console.log(item.name, 'was selected');
        };

        $scope.logOrder = function (order) {
            console.log('order: ', order);
        };

        $scope.logPagination = function (page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        }

        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;

        activate();

        function activate() {
            return showDetail()
                .then(function() {
                    console.log('Activated Event View');
                });
        }


        function showDetail() {
            return areaService.getDadosArea(detailID)
                .then(function(response) {
                    return vm.detail = response.data.gastometro;
                });
        };

        $scope.$watch('year', function() {

            if($scope.year){
                showDetail().then(function(response){

                    areaService.getYear($scope.year, response[0].idArea)
                        .then(function (response) {
                            return vm.detail = response.data.gastometro;
                        });
                });
            }

            // showDetail();

            // areaService.getYear($scope.year, vm.detail[0].idArea)
        });

        function hide() {
            return $mdDialog.hide();
        };

        function cancel() {
            return $mdDialog.cancel();
        };

        function answer(answer) {
            return $mdDialog.hide(answer);
        };
    }
})();