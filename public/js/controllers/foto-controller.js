/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('alurapic').controller('FotoController', function($scope, $http, cadastroDeFotos,recursoFoto, $routeParams){ //recursoFoto e cadastroDeFotos vem injetado pelo meus servicos
    
    $scope.foto = {};
    $scope.mensagem = '';
    
    
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
           
            cadastroDeFotos.cadastrar($scope.foto) //chamando o serviço personalizado que cadastra a foto
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if(dados.inclusao) $scope.foto = {};
                $scope.focado = true;
            })
            .catch(function(dados){
                $scope.mensagem = dados.mensagem;
            });
           
        }
    };
        
    
});
