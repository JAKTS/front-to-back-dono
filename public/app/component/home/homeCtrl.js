angular.module('app')
  .controller('homeCtrl',function($scope, homeSrvc){

    $scope.getAllProducts = function(){
      homeSrvc.getAllProducts().then(function(response){
        $scope.products = response;
      });
    }
    $scope.addProduct = function(newProduct){
      homeSrvc.addProduct(newProduct).then(function(response){
        $scope.getAllProducts();
      });
    }
    $scope.deleteProduct = function(id){
      homeSrvc.deleteProduct(id).then(function(response){
        $scope.getAllProducts();
      });
    }

})
