/**
 * Created by Josue on 20/07/2017.
 */

(function(){

    angular.module('Minhacidade')
        .controller('areasController', areasController )
        .controller('detailsAreaController', detailsAreaController)

    areasController.$inject = ['$scope','areaService'];
    detailsAreaController.$inject = ["$scope",'areaService', '$mdDialog', 'detailID'];

    function areasController($scope, areaService) {
        var vm = this;
        vm.areas = [];

        areaService.getDadosGastometro().then(function(response){
            console.log(response.data.gastometro);
            angular.forEach(response.data.gastometro, function(value){
                vm.areas.push(value);
            });
        });


        function showTabDialog(ev,id) {
            console.log(id);
            return $mdDialog.show({
                controller: detailsAreaController,
                controllerAs: 'vm',
                templateUrl: 'partials/areas/detailsGasto.html',
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
        vm.detail;
        vm.area = "Publicidade";
        vm.icon = "ic_event_black_24px";

        $scope.showTabDialog = showTabDialog;

        $scope.labels = [];
        $scope.data = [];

        $scope.areas = [];

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        // $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                }],
                yAxes: [{
                    ticks: {
                        stepSize : 5000000,
                        beginAtZero: true
                        // callback: function(label, index, labels) {
                        //     if(label==0)
                        //         return 0+',00';
                        //     else if(label==1000000)
                        //         return 1 + " milhão";
                        //     else
                        //         return label/1000000+' milhões';
                        // }
                    },
                    scaleLabel: {
                        // display: true,
                        // labelString: '1k = 1000'
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            }
        };

        areaService.getDadosGastometro().then(function(response){
            angular.forEach(response.data.gastometro, function(value){
                $scope.labels.push( value.area);
                $scope.data.push((value.empenhado));
                $scope.areas.push(value);
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
                    console.log(response.data.gastometro);
                    return vm.detail = response.data.gastometro;
                });
        };

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