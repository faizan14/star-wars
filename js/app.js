var myApp = angular.module('myApp', ['ngRoute','myController','googlechart','ngStorage']);

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.
    when('/table', {
      templateUrl: 'partials/table.html',
      controller: 'TableController'
    }).
    otherwise({
      redirectTo: '/table'
    });
}])

myApp.controller('NavCtrl',
['$scope', '$location', '$localStorage','$http', function ($scope, $location, $localStorage, $http) {

}]);
