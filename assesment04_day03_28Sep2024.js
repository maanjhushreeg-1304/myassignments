function checkStringsAnagram(txt1, txt2) {
    let len1 = txt1.length;
    console.log(len1);
    let len2 = txt2.length;
    console.log(len2);

    if(len1 !== len2){
       console.log('Invalid Input');
    }

    else {
    
    let str1 = txt1.split('').sort().join("");
    console.log(str1);
    let str2 = txt2.split('').sort().join("");
    console.log(str2);

    if(str1 == str2){
        console.log("Anagram");
     } else { 
        console.log("Non-Anagram");
     }
    
    }

    }
   

 let firstInput = 'listen';
 let SecondInput = 'silent';

 checkStringsAnagram(firstInput,SecondInput);
 