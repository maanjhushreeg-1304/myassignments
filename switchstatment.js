//function for getting student score and mark
function studentsScore(mark){
    
    switch(true){ // initializing switch to true to get inside 
        case mark >= 90: // condition 1
            return "A+";
            
        case mark >= 80: // condition 2
            return "A";
            
        case mark >= 70: // condition 3
            return "B+";
            
        case mark >=60: // condition 4
            return "B";
            
        case mark >=50: // condition 5
            return "C"

        default: // condition 6
            return "E"
            
    }

}

let mark = 92; // initializing a variable with value

let studentsGrade = studentsScore(mark); // calling function and assigning its result to a variable
console.log("Your Mark:" + mark, "Your Grade:" + studentsGrade); // printing the result

