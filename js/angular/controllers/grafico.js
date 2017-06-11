(function(){

	'use strict';

	  angular
	    .module('minhacidade')
	    .controller('graficoController', graficoController);

	  graficoController.$inject = ['$scope','$interval'];

	  function graficoController($scope, $interval){
	  	$scope.myHeader = 0;
  		// $interval(function () {

	   //      $scope.myHeader += 1;

	   //  }, 1000);

	   	$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  		$scope.data = [300, 500, 100];
	 }
	  
})();