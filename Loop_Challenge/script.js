// 1
for (var i = 1; i < 21; i++) {
  if (i % 2 == 1) { // seeing if i is odd and if so console log i
    console.log(i);
  }
}
//2
for (var i = 100; i > 0; i--) {
  if (i % 3 == 0) { // seeing if i is evenly divided by 3 if so console log i 
    console.log(i);
  }
}

//3
function arrangeArray(array) {
  var idx = 0;
  while (idx < array.length) {
    // while idx < the number of integers in the array

    for (var i = idx + 1 ; i < array.length; i++) {
      // loop through the array , loops through the whole array to see if idx is < the rest of the numbers
      if (array[idx] < array[i]) {
        // check if idx < i if so change numbers
        var temp = array[idx]; // temperory hold for the interger 
        array[idx] = array[i]; // changes idx to i 
        array[i] = temp; // changes i to temp
      }
    }
    idx++; // once loop is done add 1 to idx 
  }
  console.log(array);
}
arrangeArray([5,8,2,10]);

//4
var sum =0;
for (var i = 1; i < 101; i++){
  sum +=  i ; // adds sum to i to get the sum of all numbers 1 - 100 
}
console.log(sum);

//5
var product = 1; // var can't equal 0 since anything * 0 = 0
for ( var i = 1; i < 13; i++){
  product *= i; // multiplies all the numbers between 1-12
}
console.log(product);