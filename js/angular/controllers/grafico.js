(function(){

	'use strict';

	  angular
	    .module('minhacidade')
	    .controller('graficoController', graficoController);

	  graficoController.$inject = ['$scope'];

	  function graficoController($scope){
			$scope.labels = ["2011", "2012", "2013", "2014", "2015", "2016", "2017"];
			$scope.data = [
				[10000, 2000, 3000, 4000, 5000, 5500, 40]
			];
			$scope.onClick = function (points, evt) {
				console.log(points, evt);
			};
			$scope.options = {
				scales: {
					yAxes: [
						{
							id: 'y-axis-1',
							type: 'linear',
							display: true,
							position: 'left'
						}
					]
				}
			};
		}
})();