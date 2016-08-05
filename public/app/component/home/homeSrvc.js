angular.module('app')
  .service('homeSrvc',function($http){

    this.getAllProducts = function(){
      return $http({
        method: 'GET',
        url: '/products'
      }).then(function(response){
        return response.data
      });

    },

    this.addProduct = function(newProduct){
      return $http({
        method:'POST',
        url: '/products',
        data: newProduct
      }).then(function(response){
        return response;
      })
    }
    this.deleteProduct = function(id){
      return $http({
        method: 'DELETE',
        url: 'products/' + id
      }).then(function(response){
        return response;
      })
    }

})
