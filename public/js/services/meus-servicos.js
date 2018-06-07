angular.module('meusServicos', ['ngResource'])
        .factory('recursoFoto',function ($resource) { //Depende de um resource que é injetado pelo angular


            return $resource('/v1/fotos/:fotoId', null, { 
                update: {
                    method: 'PUT'
                }
            });


        })
        .factory('cadastroDeFotos', function (recursoFoto, $q) {//depende de recursoFoto, $q é injetado pelo angular serve para fazer minhas promisses personalizadas


            var servico = {};
            
            servico.cadastrar = function(foto){
                return $q(function(resolve, reject){ //criando uma promisse personalizada resolve cai no then, reject cai no catch
                    
                    if(foto._id){ //se tem id faz uma edicao
                        
                        recursoFoto.update({fotoId: foto._id}, foto, function(){
                            
                            resolve({
                                mensagem: 'Foto '+ foto.titulo + 'atualizada com sucesso!',
                                inclusao: false
                            });
                        },function(erro){
                            console.log(erro);
                            reject({
                                mensagem: 'Nao foi possível aterar a foto '+ foto.titulo
                            });
                        });
                        
                    }else{
                        
                        recursoFoto.save(foto, function(){
                            
                            resolve({
                                mensagem: ' Foto '+ foto.titulo + ' incluida com sucesso!',
                                inclusao:true
                            });
                            
                        },function(erro){
                            console.log(erro);
                            reject({
                                mensagem: 'Nao foi possível incluir a foto' + foto.titulo
                            });
                        });
                        
                    }
                    
                    
                    
                });
            };
            
            return servico;


        });
        /*para usar esse serviço
         * 
         * cadastroDeFotos.cadastrar(foto)
         * .then(function(){
         * 
         * })
         * .cath(function(erro)){
         * 
         * });
         * 
         * */
