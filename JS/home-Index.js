//home-index

var app = angular.module("myApp", []);
app.controller("homeIndexController", function ($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.myBtnClick = function () {
       
        if ($scope.username == "nosql" && $scope.password == "html5") {
            alert("welcome to the hell");
        } else {
            alert("Invalid Password");
        }
        //$scope.myVar = !$scope.myVar;
    };
});
