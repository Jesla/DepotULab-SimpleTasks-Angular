var controllers = angular.module("simpleTasksApp", []);
controllers.controller("simpleTasksController", function ($scope) {
    $scope.firstObjective = function () {
        alert("One Down! Five to Go!")
    };

    $scope.secondObjective = function () { //FIGURE OUT HOW TO ADD ERROR ALERT IF INPUT IS EMPTY
       alert($scope.secondObjInput)
    };
        
    $scope.thirdObjective = function () {
        $scope.colorChange = {backgroundColor: "red"};
    };
    
    $scope.thirdObjRev = function () {  // I FEEL LIKE THIS IS KIND OF A CHEAP WAY TO DO THIS?
        $scope.colorChange = {backgroundColor: ""};
    };
        
    $scope.fourthObjective = function () {
        $scope.textColorChange = {color: "#" + (Math.random() * 0xFFFFFF << 0).toString(16)}
    };
        
    $scope.fifthObjective = function () {
        $scope.fifthObjName = "Jessica Larsen";
    };
      
    $scope.sixthObjective = function() {
        $scope.friends = ["Stacy", "JD", "Jared", "Brian", "Kinley", "Blair", "Stephanie", "Susan", "Jim", "Mark"];
    };
        
});
