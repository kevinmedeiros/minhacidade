// Author - Josué Paiva | josuepaiva@lavid.ufpb.br

/* recommended */

// main.js

var app = angular.module("minhacidade", ['ngRoute', 'chart.js']);
app.constant('minhaCidadeIURL', {
      API_URL: 'http://51.15.137.60:8080/api/',
      GASTOMETRO: 'gastometro/',
      AREA: 'area/',
      SAUDE:'saude/' 
  })
    app.config(function($routeProvider) {
        $routeProvider
	        .when("/", {
	            templateUrl : "../partials/index.html",
	            controller: "graficoController"
	        })
	        .when("/saude", {
	            templateUrl : "../partials/saude.html",
	            controller: "saudeController"
	        })
	        .when("/teste", {
	        	templateUrl: "../partials/testerota.html"
	        })
	        .otherwise({redirectTo  : '/'});
});

