// Code 1 
var x = 5; // x = 5
    
function setX(newValue) {
    x = newValue; // x = 5 
}
    
console.log(x); // console log 5 
setX(15);
console.log(x); // console log 15 

// Code 2
var x = 5; // x = 5
function addToX(amount) { 
    return x + amount; // return = -5 
    console.log("hello there"); // print 'hello there'
} 
console.log(x); // print 5
var result = addToX(-10);  
console.log(result); // prints -5 
console.log(x); // 5 

//code 3
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
} 
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1); 
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
