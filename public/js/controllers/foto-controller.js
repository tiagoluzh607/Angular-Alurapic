/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    
    $scope.foto = {};
    $scope.mensagem = '';
    
    
    if($routeParams.fotoId){ // fotoId deve ter o mesmo nome do campo na config de rotas no main.js -  se na url vir um id para editar
        
        $http.get('v1/fotos/'+ $routeParams.fotoId)
                .success(function(foto){ // caso sucesso receberei uma foto do servidor
                        $scope.foto = foto;
                    })
                .error(function(erro){
                    $scope.mensagem = 'Não foi possivel obter a foto';
                });
        
        
    }
    
    
    $scope.submeter = function(){
        
        if($scope.formulario.$valid){ // somente se o formulario for valido
              
            if($scope.foto._id){ //se a imagem tem um id estou editando
                
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                        .success(function(){
                            $scope.mensagem = 'foto Editada com sucesso';
                        })
                        .error(function(erro){
                            $scope.mensagem = 'Não foi possivel Editar a Foto';
                        });
                
            }else{
                $http.post('v1/fotos', $scope.foto)
                        .success(function(){
                            $scope.mensagem = 'foto incluida com sucesso';
                        })
                        .error(function(erro){
                            $scope.mensagem = 'Não foi possível incluir a foto';
                        });
            }
        }
    };
        
    
});
