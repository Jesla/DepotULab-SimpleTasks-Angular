var controllers = angular.module('simpleTasksApp', []);
controllers.controller('simpleTasksController', function ($scope) {
    $scope.firstObjective = function () {
        alert('One Down! Five to Go!')
    };

    $scope.secondObjective = function () { //COME BACK TO THIS AND ADD ERROR ALERT IF INPUT IS EMPTY
       alert($scope.secondObjInput)
    };
        
    $scope.thirdObjective = function () {
        $scope.colorChange = {backgroundColor: "red"};
    };
    
    $scope.thirdObjRev = function () {  // I FEEL LIKE THIS IS A CHEAP WAY TO DO THIS?
        $scope.colorChange = {backgroundColor: ''};
    };
        
    $scope.fourthObjective = function () {
        $scope.textColorChange = {color: "#" + (Math.random() * 0xFFFFFF << 0).toString(16)}
    };
        
      
      
// 5. Add a button and an empty div. When the button is clicked, add a `span` that contains your 
// name to the empty div.

//6. Create a button and a `ul` in your HTML. In JavaScript, create an array containing the names 
// of your friends (at least 10. If you don't have that many, include your imaginary ones). When
// the button is clicked, add each friend's name as an `li` to the `ul` on the page.
        
});
