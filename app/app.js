'use strict';

// Declare app level module which depends on views, and components
angular.module('Minhacidade', [
    'ui.router',
    'ngMaterial',
    'ngAria',
    'ngCookies'
]).
    constant('minhacidadeURL', {
    API_URL: 'http://51.15.137.60:8080/api/',
    GASTOMETRO: 'gastometro/',
    AREA: 'area/',
    SAUDE:'saude/',
    EDUCACAO: 'educacao/',
    SEGURANCA: 'seguranca/',
    ESPORTE: 'esporte/'}
)
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
        });

    $urlRouterProvider.otherwise('/');
});