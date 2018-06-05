/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('alurapic').controller('FotoController', function($scope){
    
    $scope.foto = {};
    
    $scope.submeter = function(){
        console.log($scope.foto);
    };
    
});
