'use strict';

// Declare app level module which depends on views, and components
angular.module('Minhacidade', [
    'ui.router',
    'ngMaterial',
    'ngCookies',
    'md.data.table'
    ])
    .constant('minhacidadeURL', {
    API_URL: 'http://51.15.137.60:8080/api/',
    GASTOMETRO: 'gastometro/',
    AREA: 'area/',
    SAUDE:'saude/',
    EDUCACAO: 'educacao/',
    SEGURANCA: 'seguranca/',
    ESPORTE: 'esporte/'}
    )
    .run(['$http','$rootScope', 'userService','$state','$location', check])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/index.html',
            controller: 'indexController',
            controllerAs: 'ctrl'
        })
        .state('orcamento', {
            url: '/orcamento',
            templateUrl: 'partials/orcamento/orcamento.html',
            controller: 'orcamentoController',
            controllerAs: 'ctrl'
        })
        .state('areas', {
            url: '/areas',
            templateUrl: 'partials/areas/areas.html',
            controller: 'areasController',
            controllerAs: 'ctrl'
        })
        .state('vocesabia', {
            url: '/vocesabia',
            templateUrl: 'partials/vocesabia/vocesabia.html',
            controller: 'vocesabiaController',
            controllerAs: 'ctrl'
        })
        .state('sobre', {
            url: '/sobre',
            templateUrl: 'partials/sobre/sobre.html',
            controller: 'sobreController',
            controllerAs: 'ctrl'
        })
        .state('dadosuser',{
            url: '/dadosuser',
            templateUrl: 'partials/userdados.html',
            controller: 'userController',
            controllerAs: 'ctrl'
        });

    $urlRouterProvider.otherwise('/');
}).config(function($mdThemingProvider) {
    $mdThemingProvider.disableTheming();
})


function add_header_api(){
    // $http.defaults.headers.common['X-Minhacidade-Key'] = 'MINHACIDADE';
    // $http.defaults.useXDomain = true;
}

function check($http,$rootScope, userService, $state, $location){

    $rootScope.header = true;
    $rootScope.sidnav = true;
    $rootScope.$on('$locationChangeStart', function(evt, next, current) {

            if(!userService.getState() || !userService.getCity()){

                $rootScope.header = false;
                $rootScope.sidnav = false;

                $location.path('/dadosuser');

            }else{
                $rootScope.city = userService.getCity();
                $rootScope.state = userService.getState();
            }
    });
}