(function(){

	'use strict';

	  angular
	    .module('minhacidade')
	    .filter('colorArea', function(){
	    	return function(value){
	    		if(value === "Saúde"){
	    			return "local_hospital";
	    		}else if(value === "Educação"){
	    			return "book";
	    		}else if(value === "Esporte"){
	    			
	    			return "directions_walk";
	    		}else{
	    			return value;
	    		}

	    		
	    	}
	    }).
	    filter('colorDiv',function() {
	    	return function(value){
	    		if(value === "Saúde"){
	    			console.log("colorDivSaude");
	    			return "saude";
	    		}else if(value === "Educação"){
	    			console.log("colorEducação");
	    			return "educacao";
	    		}else if(value === "Esporte"){
	    			console.log("colorDiveEsporte");
	    			return "esporte";
	    		}else{
	    			return "desconhecido";
	    		}
	    	}
	    		
	    });
	  
})();



