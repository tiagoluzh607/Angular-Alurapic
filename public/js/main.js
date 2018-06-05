angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute']) //o modulo principal depende de minhasDiretivas
        .config(function($routeProvider){ // injeção do routeProvider atraves da dependencia ngRoute
            
            $routeProvider.when('/fotos', { //deve ser acessado asim /#/fotos
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            });
            
            $routeProvider.when('/fotos/new', { //deve ser acessado asim /#/fotos/new
                templateUrl: 'partials/foto.html'
            });
            
            
            $routeProvider.otherwise({ redirectTo: '/fotos'});
            
            
        });