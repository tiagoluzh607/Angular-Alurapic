angular.module('alurapic').controller('FotosController', function($scope){
    
    $scope.fotos = [
            
        { //injetando dinamicamente em scope um objeto foto
            titulo: 'Leão 1',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        { //injetando dinamicamente em scope um objeto foto
            titulo: 'Leão 2',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        { //injetando dinamicamente em scope um objeto foto
            titulo: 'Leão 3',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        
        
        
    ];
});