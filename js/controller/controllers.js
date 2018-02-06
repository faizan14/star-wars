var myController = angular.module('myController', ['ui.bootstrap']);

myController.controller('TableController', ['$scope', '$http',function($scope, $http) {

      $http({
        method: 'GET',
        url: 'https://swapi.co/api/people'
      }).then(function successCallback(response) {
          $scope.peopleList = response.data.results;
          $scope.peopleList.forEach(function(people, i){
            var filmList = [];
            people.films.forEach(function(film) {
              $http({
                method: 'GET',
                url: film
              }).then(function successCallback(response) {
                  filmList.push(response.data.title);
                  $scope.peopleList[i].filmList = filmList;
                }, function errorCallback(response) {

                });
            })
          })

      }, function errorCallback(response) {

      })
}]);
