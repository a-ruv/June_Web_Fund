var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
function countPos(){
    for(var i = 0; i< numbers.length;i++){
        if(numbers[i] > 0){
            countPositives++;
        }
    }
    return countPositives;
}
    
console.log("there are " + countPos() + " positive values");
