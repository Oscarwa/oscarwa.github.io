'use strict';

/**
 * @ngdoc function
 * @name oscarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oscarApp
 */
angular.module('oscarApp')
  .controller('MainCtrl', function ($http, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("info.js")
      .then(function(response) {
        $scope.info = response.data;
    });
  });
