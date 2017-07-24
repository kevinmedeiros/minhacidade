/**
 * Created by Josue on 01/07/2017.
 */

'use strict';

angular.module('Minhacidade')
    .controller('GastometroCtrl', ["$scope","$location","$timeout",function($scope,$location, $timeout) {

        console.log("Controle Gastometro iniciado");
        const gastoPorSeg = 500;
        var totalMiliseg;
        var char_;
        var is_number = /[0-9]/;
        $scope.timeInMs = 40240480000;

        //1º Pegar a data atual a cada 1 segundo
        //2º Pegar data em milisegundos
        //3º Transformar milisegundos em segundos
        //4º multiplicar os segundos por gastoPorSeg
        //5º Receber valor e distrinchar em unidades
        //6º Pegar bilhão, milhão, reais, centavos
        //7º Ver limites das casas decimais
        //8º Aplica resultado na tela

        // var j = 0;
        // var result = 0;
        //
        // for(var i = array.length -1; i >= 0; i  --, j++ ){
        //     result += array[i]*Math.pow(10,j);
        //     console.log(array[i]*Math.pow(10,j));
        // }


    }]);