app.controller("myctrl",function($scope){

    $scope.fnum= 0; //set initial value of text box to '0'
    $scope.snum= 0;

    $scope.result = 0;
/* Alternate logic for calculator
    $scope.result = function() {
        if ($scope.operator == '+') {
            return $scope.fnum + $scope.snum;
        }
        if ($scope.operator == '-') {
            return $scope.fnum - $scope.snum;
        }
        if ($scope.operator == '*') {
            return $scope.fnum * $scope.snum;
        }
        if ($scope.operator == '/') {
            return $scope.fnum / $scope.snum;
        }
    };
    */

    $scope.result = ()=>{

        switch ($scope.operator) {
            case '+': return $scope.fnum + $scope.snum; //will return sum if "+" operator is selected
               
            case '-': return $scope.fnum - $scope.snum; //will return difference if "-" operator is selected
        
                  
            case '*': return $scope.fnum * $scope.snum; //will return multiplication of two numbers if "*" operator is selected
                    
            case '/': return $scope.fnum / $scope.snum; //will return division of two numbers if "/" operator is selected
                
        
            }
        };
           
})