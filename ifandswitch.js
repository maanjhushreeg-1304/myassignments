//function for displaying broswer name
function launchBrowser (browserName){
    if (browserName == "Chrome"){ 
        console.log("Chrome Broswer");

    }
    else if (browserName == "Edge"){
        console.log("Edge Broswer");

    }
    else if (browserName == "Safari"){
        console.log("Safari Broswer");

    }
    else {
        console.log("Opera Browser");
    }


}


// function for displaying type of test started
function runTests (testType){
    switch (testType){
        case "Sanity":
            console.log ("Sanity Testing Started");
            break;
        case "SIT":
            console.log ("SIT  Started");
            break;
        case "Regression":
            console.log("Regression Testing Started");
            break;
        case "Smoke":
            console.log("Smoke Testing Started");
            break;
    }

}

launchBrowser("Opera");
runTests("Smoke");