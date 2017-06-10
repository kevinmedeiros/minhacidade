// Author - Josué de Paiva | josuepaiva@lavid.ufpb.br

/* recommended */

// saude.js

(function() {
  'use strict';

  angular
    .module('minhacidade')
    .service('saudeService', saudeService);

  saudeService.$inject = ['$http', '$q', 'nossaCidadeURL'];

  /* recommended */
  function saudeService($http, $q, nossaCidadeURL){

    return ({
      initAPI : initAPI
    });

    function initAPI(){

      var deferred = $q.defer();

      $http.get(nossaCidadeURL.API_URL)
        .success(initAPISucess)
        .error(initAPIError);

      return deferred.promise;

      function nossaCidadeURLSucess(response){
        deferred.resolve(response);
      }

      function nossaCidadeURLError(error){
        console.log('MSG: Error on eventService request - nossaCidadeURLErrorFailed - ERROR: ');
      }

    }


  }

})();