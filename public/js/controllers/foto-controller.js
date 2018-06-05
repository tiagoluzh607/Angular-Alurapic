/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('alurapic').controller('FotoController', function($scope, $http){
    
    $scope.foto = {};
    $scope.mensagem = '';
    
    $scope.submeter = function(){
        
        if($scope.formulario.$valid){ // faz o post somente se o formulario for valido
        
            $http.post('v1/fotos', $scope.foto)
                    .success(function(){
                        $scope.mensagem = 'foto incluida com sucesso';
                    })
                    .error(function(erro){
                        $scope.mensagem = 'Não foi possível incluir a foto';
                    });
        }
    };
        
    
});
