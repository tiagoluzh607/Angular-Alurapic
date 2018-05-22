angular.module('alurapic').controller('FotosController', function($scope){
    
    $scope.foto = { //injetando dinamicamente em scope um objeto foto
        titulo: 'Leão',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
});