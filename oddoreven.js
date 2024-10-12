//function for checking odd or even number
function isOddorEven(num){
    if (num%2==0){  // condition to check odd or even
        return ("Entered Number is Even"); // if even, this will return "Even"
        
    }
    else {
        return ("Entered Number is Odd"); // else, this will return "Odd"
        
        
    }

}
let value = 13; // intializing a number and declaring a value
let result = isOddorEven(value); // calling the function and storing it in a variable
console.log(result); // print the stored result
