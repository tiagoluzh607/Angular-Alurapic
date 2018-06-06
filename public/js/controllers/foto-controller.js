/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('alurapic').controller('FotoController', function($scope, $http, $resource, $routeParams){
    
    $scope.foto = {};
    $scope.mensagem = '';
    
    
    var recursoFoto = $resource('/v1/fotos/:fotoId', null, {
        update : {
            method: 'PUT'
        }
    });
    
    if($routeParams.fotoId){ // fotoId deve ter o mesmo nome do campo na config de rotas no main.js -  se na url vir um id para editar
        
        
        recursoFoto.get({fotoId: $routeParams.fotoId},function(foto){ // faz um get em /v1/fotos caso sucesso receberei uma foto do servidor
            $scope.foto = foto;
        },function(erro){
            $scope.mensagem = 'Não foi possivel obter a foto';
        });
        
        /* mesma funcao utilizando $http
        $http.get('v1/fotos/'+ $routeParams.fotoId)
                .success(function(foto){ // caso sucesso receberei uma foto do servidor
                        $scope.foto = foto;
                    })
                .error(function(erro){
                    $scope.mensagem = 'Não foi possivel obter a foto';
                });
        */
        
    }
    
    
    $scope.submeter = function(){
        
        if($scope.formulario.$valid){ // somente se o formulario for valido
              
            if($scope.foto._id){ //se a imagem tem um id estou editando
                
                
                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function(){ //faz um put em v1/fotos
                    $scope.mensagem = 'foto Editada com sucesso';
                }, function(erro){
                    $scope.mensagem = 'Não foi possivel Editar a Foto';
                });
                
                /* mesma coisa via $http
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                        .success(function(){
                            $scope.mensagem = 'foto Editada com sucesso';
                        })
                        .error(function(erro){
                            $scope.mensagem = 'Não foi possivel Editar a Foto';
                        });
                */
            }else{
                
                 recursoFoto.save($scope.foto, function() { //faz um post em v1/fotos
                        $scope.mensagem = 'foto incluida com sucesso';
                    }, function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível incluir a foto';
                    });
                
                /* mesma coisa utilizando $http
                $http.post('v1/fotos', $scope.foto)
                        .success(function(){
                            $scope.mensagem = 'foto incluida com sucesso';
                        })
                        .error(function(erro){
                            $scope.mensagem = 'Não foi possível incluir a foto';
                        });
                */
            }
        }
    };
        
    
});
