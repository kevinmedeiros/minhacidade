/**
 * Created by Josue on 30/07/2017.
 */
/**
 * Created by Josue on 23/07/2017.
 */

'use strict';

(function(){
    angular
        .module("Minhacidade")
        .directive("seticons", seticons);


    seticons.$inject = ['$parse', '$http', '$sce', '$interval'];

    function seticons($parse, $http, $sce, $interval){
        return {
            restrict: 'AE',
            scope: {
                "type": "@type",
                "area": "@area"
            },
            link: function($scope, iElement, iAttrs){

                if($scope.area){
                    switch ($scope.type){
                        case "Geral":
                            iAttrs.ngSrc = "images/icons/ic_av_timer_white_24px.svg";
                            break;
                        case "Saúde":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Educação":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Segurança":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Administração":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Previdencia Social":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Urbanismo":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Transporte":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Cultura":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Ciência e Tecnologia":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        case "Agricultura":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                            break;
                        default:
                            console.log("nenhuma dos casos");
                    }
                }else {

                    switch ($scope.type) {
                        case "Geral":
                            iAttrs.ngSrc = "images/icons/ic_av_timer_white_24px.svg";
                            break;
                        case "Saúde":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Educação":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Segurança":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Administração":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Previdencia Social":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Urbanismo":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Transporte":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Cultura":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Ciência e Tecnologia":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        case "Agricultura":
                            iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_white_24px.svg";
                            break;
                        default:
                            console.log("nenhuma dos casos");
                    }
                }
                // console.log("Elementos");
                // console.log(iElement);
                // console.log("atributos");
                // console.log(iAttrs);
            }

        }
    }

})();
