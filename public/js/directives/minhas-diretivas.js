/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('minhasDiretivas', [])
        .directive('meuPainel', function(){ //O angular transforma meuPainel para mau-painel, quando for usar usar meu-painel
            
            var ddo = {}; //uma diretiva sempre retorna um ddo
    
            ddo.restric = "AE"; //Poderemos usar tanto como Atribute: <div meu-painel></div> tanto como Element: <meu-painel></meu-painel>
            
            ddo.scope = {
                titulo: '@titulo' // diz podemos inserir o atributo titulo para o painel: <meu-painel titulo="Teste"></meu-painel>, 
            }
            
            ddo.transclude = true; //permite que no html montado insira elementos filhos
            ddo.templateUrl = 'js/directives/meu-painel.html'; //Elemento que ele irá renderizar
    
            return ddo;
        })
        .directive('minhaFoto', function(){ //O angular transforma meuPainel para mau-painel, quando for usar usar meu-painel
            
            var ddo = {}; //uma diretiva sempre retorna um ddo
    
            ddo.restric = "AE"; //Poderemos usar tanto como Atribute: <div meu-painel></div> tanto como Element: <meu-painel></meu-painel>
            
            ddo.scope = {
                titulo: '@titulo', // diz podemos inserir o atributo titulo para o painel: <meu-painel titulo="Teste"></meu-painel>, 
                url: '@url'
            };
            
            ddo.templateUrl = 'js/directives/minha-foto.html';
            return ddo;
        })
        .directive('meuBotaoPerigo', function(){ //O angular transforma meuPainel para mau-painel, quando for usar usar meu-painel
            
            var ddo = {}; //uma diretiva sempre retorna um ddo
    
            ddo.restric = "E"; //Poderemos somente como Element: <meu-painel></meu-painel>
            
            ddo.scope = {
                nome: '@nome', // diz podemos inserir o atributo titulo para o painel: <meu-painel titulo="Teste"></meu-painel>, 
                acao: '&acao' // o @ é passado como cópia de uma string porem o & passa como uma expressao
            };
            
            ddo.templateUrl = 'js/directives/meu-botao-perigo.html';
            return ddo;
        })
        .directive('meuFocus', function(){ //O angular transforma meuPainel para mau-painel, quando for usar usar meu-painel
            
            var ddo = {}; //uma diretiva sempre retorna um ddo
    
            ddo.restric = "A"; //Poderemos somente como Element: <meu-painel></meu-painel>
            
            ddo.scope = {
                focado : "=focado" // = é para fazer uma comunicao entre a diretiva e controller as duas vao alterar a propriedade
            };
            
            ddo.link = function(scope, element){ // na faze de link colocamos um escutador retornando o scope(DA DIRETIVA) e o elemento enque a diretiva foi inserida
                scope.$watch('focado', function(){ // registra um escutador para a propriedade focado
              
                    if(scope.focado){ //Se a propriedade focado for true
                        console.log(element);
                        element[0].focus();
                        scope.focado = false; // coloca novamente para falso para quando abrir a tela de novo ele nao esteja marcado como true
                    } 
                });
            };
            
            
            //ddo.templateUrl = 'js/directives/meu-botao-perigo.html';
            return ddo;
        });
