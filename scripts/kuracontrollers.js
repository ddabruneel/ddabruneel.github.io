'use strict';

/* Controllers */

angular.module('kura.controllers', [])

  .controller('KuraCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
      
      $scope.ColorOpts = ["Region", "Development Status", "HDI Category"];
      // $scope.VisColors = ["Region", "HDI", "GPI", "SFI"];
      
      $scope.SizeOpts = ["Set Size", "HDI Score", "Global Peace Index", "State Fragility Index"];
      // $scope.VisColors = ["HDI", "GPI", "XYZ"];
      
      $scope.ShapeOpts = ["Development Status", "Circle"];
 
      $scope.getKuraFile = function getKuraFile(str) {
   
       var PATH = 'data/';    
       d3.csv(PATH + str, function(data){
        return data;
        }, function(err, data){
        if(err){ throw err; }
        $scope.$apply(function(){
          $scope.KuraFile = data;
          //console.log(JSON.stringify(data));
        });
      });
    };
      
    $scope.getKuraFile("votingThemes.csv");
      
    
      
    

}])