//code 1
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

//code 2
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

//3

var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
// reversing an array
function reverseArray(arr){
    var newArr = [];
    for(var i = arr.length -1; i > -1; i--){
        newArr.push(arr[i]);
    }
    console.log(newArr);
    return newArr;
}
reverseArray([4,5,6,7,8]);



