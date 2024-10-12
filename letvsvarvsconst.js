const browserVersion = "Chrome"; //global variable 

function getBrowserVersion () { // function initiated
    if (browserVersion = "Chrome"){ // if conditional check 
        var browserVersion = "Chrome";
        // let browserVersion = "Chrome";
        console.log (browserVersion); // print statement inside if block
 
    }
    console.log (browserVersion); // print statement outside if but inside function
}

getBrowserVersion(); // call function 
