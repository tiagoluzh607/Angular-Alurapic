angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute']) //o modulo principal depende de minhasDiretivas
        .config(function($routeProvider){ // injeção do routeProvider atraves da dependencia ngRoute
            
            $routeProvider.when('/fotos', { //deve ser acessado asim /#/fotos
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            });
            
            $routeProvider.when('/fotos/new', { //deve ser acessado asim /#/fotos/new
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            });
            
            $routeProvider.when('/fotos/edit/:fotoId', { //deve ser acessado asim /#/fotos/edit/1
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            });
            
            //Rota padrão caso for qualquer outra coisa direciona para /fotos
            $routeProvider.otherwise({ redirectTo: '/fotos'});
            
            
        });