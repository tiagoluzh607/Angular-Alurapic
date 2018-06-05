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
        });
