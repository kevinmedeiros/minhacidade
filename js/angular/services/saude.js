// Author - Josué de Paiva | josuepaiva@lavid.ufpb.br

/* recommended */

// saude.js

(function() {
  'use strict';

  angular
    .module('minhacidade')
    .service('saudeService', saudeService);

  saudeService.$inject = ['$http', '$q', 'minhaCidadeIURL'];

  /* recommended */
  function saudeService($http, $q, minhaCidadeIURL){

    return ({
      getGastosSaude : getGastosSaude,
      getGastometro : getGastometro
    });

    function getGastosSaude(){

      return $http({
        method: 'GET',
        url: minhaCidadeIURL.API_URL + minhaCidadeIURL.AREA + minhaCidadeIURL.SAUDE + "2017",
      }).then(getGastosSaudeSucess, getGastosSaudeError );

      function getGastosSaudeSucess(response){
        return response;
      }

      function getGastosSaudeError(error){
        console.log('MSG: Error on eventService request - nossaCidadeURLErrorFailed - ERROR: ');
      }

    }

    function getGastometro(){

      var deferred = $q.defer();

      $http.get(minhaCidadeIURL.API_URL + minhaCidadeIURL.AREA + minhaCidadeIURL.GASTOMETRO)
        .success(getGastometroSucess)
        .error(getGastometroError);

      return deferred.promise;

      function getGastometroSucess(response){
        deferred.resolve(response);
      }

      function getGastometroError(error){
        console.log('MSG: Error on eventService request - nossaCidadeURLErrorFailed - ERROR: ');
      }

    }


  }

})();