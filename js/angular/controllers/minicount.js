(function(){

	'use strict';

	  angular
	    .module('minhacidade')
	    .controller('minicountController', minicountController);

	  minicountController.$inject = ['$scope', 'saudeService'];

	  function minicountController($scope, saudeService){


	  	$scope.saude = "R$ 2002154";
	  	$scope.educacao = "R$ 100154";
	  	$scope.esporte = "R$ 12154";
	  	console.log("controller iniciado");

	  	saudeService.getGastosSaude().then(function(response){
	  		console.log("Resposta api "+ JSON.stringify(response));

	  		//$scope.gastos = response;
	  	});

	  	$scope.gastos = [];
	 	$scope.gastos.push({"area": "Saúde",
	 						"gasto": "R$ 2901932"
	 	});
	 	$scope.gastos.push({"area": "Educação",
	 						"gasto": "R$ 12901932"
	 	});
	 	$scope.gastos.push({"area": "Esporte",
	 						"gasto": "R$ 21932"
	 });
	 	//	var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

		// // Update the count down every 1 second
		// var x = setInterval(function() {

		//   // Get todays date and time
		//   var now = new Date().getTime();

		//   // Find the distance between now an the count down date
		//   var distance = countDownDate - now;

		//   // Time calculations for days, hours, minutes and seconds
		//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		//   // Display the result in the element with id="demo"
		//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
		//   + minutes + "m " + seconds + "s ";

		//   // If the count down is finished, write some text 
		//   if (distance < 0) {
		//     clearInterval(x);
		//     document.getElementById("demo").innerHTML = "EXPIRED";
		//   }
		// }, 1000);

	 }
	  
})();