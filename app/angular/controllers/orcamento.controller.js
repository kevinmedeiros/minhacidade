/**
 * Created by Josue on 19/07/2017.
 */
'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('orcamentoController', orcamentoController )

    orcamentoController.$inject = ["$scope","$mdEditDialog", "$q", "$timeout", "areaService"];

    function orcamentoController($scope, $mdEditDialog, $q, $timeout, areaService) {

        $scope.labels = [];
        $scope.data = [];
        $scope.optionsChart = {
            legend: {
                labels: {
                    display: true
                },
                display: true
            }
        };

        this.myDate = new Date();
        this.isOpen = false;

        $scope.areas = [];

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
    }
})();

