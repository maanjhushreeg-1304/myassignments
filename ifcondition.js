//function created to check whether the number created is positive, negative or zero
function numberCheck(num){
    if (num>0){ // condition to check if the number is greater than zero
        return ("Entered number is Positive");
    }
    else if (num<0) { // // condition to check if the number is less than zero
        return("Entered number is Negative");
    
    }
    else { // condition to check if the number is equal to zero
        return ("Entered number is Zero");
    }
}

let value = -31; // intializing variable and declaring value for it
let result = numberCheck(value); // calling function and storing the result in variable
console.log(result); // printing the result