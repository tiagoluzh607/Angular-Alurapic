angular.module('alurapic').controller('FotosController', function($scope, $http, recursoFoto){ //recursoFoto vem injetado pelo meus servicos
    
    
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    
    
    recursoFoto.query(function(fotos){ // query é inteligete o sufuciente para chamar o get em /v1/fotos
        $scope.fotos = fotos;
    },function(erro){
        console.log(erro);
    }); 
    
    /* mesma funcao usando $http
    $http.get('v1/fotos')
            .success(function(fotos){
                $scope.fotos = fotos;
            })
            .error(function(erro){
                console.log(erro);
            });
    */        
            
    $scope.remover = function(foto){
        
        
        recursoFoto.delete({fotoId : foto._id}, function(){ // query é inteligete o sufuciente para chamar o delete em v1/fotos/IdDaFoto
            
            //remover foto da lista na tela mesmo
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
                    
            $scope.mensagem = 'Foto' + foto.titulo + ' Foi removida com sucesso';

            
        }, function(erro){
            
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a foto '+ foto.titulo;
            
        });
        
        /* mesma funcao usando $http
        $http.delete('v1/fotos/'+foto._id)
                .success(function(){
                    
                    //remover foto da lista na tela mesmo
                    var indiceFoto = $scope.fotos.indexOf(foto);
                    $scope.fotos.splice(indiceFoto, 1);
                    
                    $scope.mensagem = 'Foto' + foto.titulo + ' Foi removida com sucesso';
                })
                .error(function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível remover a foto '+ foto.titulo;
                });
       */         
    };
});