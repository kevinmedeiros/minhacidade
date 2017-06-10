(function(){
	'use strict';
	angular
	  .module('minhacidade')
	  .controller('saudeController', saudeController);
		
	saudeController.$inject = ['$scope', '$http'];
		
	function saudeController($scope, $http){
		var investimentosPossiveis = [];
		var comoFoiGasto = [];
		
		$scope.labels = ["2011", "2012", "2013", "2014", "2015", "2016", "2017"];
			$scope.data = [[10000, 2000, 3000, 4000, 5000, 5500, 40]];
			$scope.options = {
				scales: {
					yAxes: [{ id: 'y-axis-1', type: 'linear', display: true, position: 'left'}]
				}
			};

		investimentosPossiveis.push({"descricao": "400 novos centros de pronto atendimento (UPA)", "valor": "25.000,00"});
		investimentosPossiveis.push({"descricao": "400 Contratação de 40 médicos", "valor": "13.000,00"});
		investimentosPossiveis.push({"descricao": "100 ambulâncias novas", "valor": "10.000,00"});
		
		comoFoiGasto.push({"descricao": "Minha saúde minha vida", "valor": "25.000,00"});
		comoFoiGasto.push({"descricao": "Preciso de saúde", "valor": "13.000,00"});

		$scope.investimentosPossiveis = investimentosPossiveis;
		$scope.comoFoiGasto = comoFoiGasto;
	}  
})();