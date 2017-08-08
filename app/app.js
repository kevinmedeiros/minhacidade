'use strict';

// Declare app level module which depends on views, and components
angular.module('Minhacidade', [
    'ui.router',
    'ngMaterial',
    'ngCookies',
    'md.data.table',
    'ngAria',
    'chart.js'
    ])
    .constant('minhacidadeURL', {
    API_URL: 'http://www.minhacidade.top:8080/api/v1/cidades/',
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
                controller: 'indexController',
                controllerAs: 'ctrl',
                templateUrl: 'partials/index.html'
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
            .state('educacional', {
                url: '/educacional',
                templateUrl: 'partials/educacional/educacional.html'
            })
            .state('dadosuser',{
                url: '/dadosuser',
                templateUrl: 'partials/userdados.html',
                controller: 'userController',
                controllerAs: 'ctrl'
            });

            $urlRouterProvider.otherwise('/');
        })
        .config(function($mdThemingProvider) {
            // $mdThemingProvider.disableTheming();
        })
        .config(function (ChartJsProvider) {
            ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
        })
//Fonte roboto
//Cores

// azul - #00b0ff
// amarelo - #FFB300

function check($http,$rootScope, userService, $state, $location){

    $rootScope.header = true;
    $rootScope.sidnav = true;
    $rootScope.$on('$locationChangeStart', function(evt, next, current) {

            if(!userService.getState() || !userService.getCity()){

                $rootScope.header = false;
                $rootScope.sidnav = false;

                $('#content_main').attr('style', function(i,s) {
                    return "background: url('../images/background.jpg') no-repeat center center !important; " +
                        "-webkit-background-size: 100% 100% !important;" +
                        "-moz-background-size: 100% 100% !important;" +
                        "-o-background-size: 100% 100% !important;" +
                        "background-size: 100% 100% !important;"
                });

                $location.path('/dadosuser');


            }else{
                var arr = current.split('#');
                if(arr[1] == "/dadosuser"){
                    $location.path('/');
                }

                $('#content_main').attr('style', function(i,s) {
                    return "background: #F9F9F9 !important;"
                });

                $rootScope.city = userService.getCity();
                $rootScope.state = userService.getState();
            }
    });
}