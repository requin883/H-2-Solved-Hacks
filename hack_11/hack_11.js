/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

for (let i=0;i<numberArray.length;i++){
    i==0 ? result.push("h@ck"):"";
    numberArray[i]==1?result.push("one"): 
    numberArray[i]==3?result.push("three"):
    numberArray[i]==5?result.push("five")&&result.push("h@ck"):
    result.push(numberArray[i]);
    
}

for (let i=0;i<stringArray.length;i++){
    stringArray[i]=="bar"?result.push("Bar"):
    stringArray[i]=="baz"?result.push("b@z"):
    stringArray[i]=="qux"?result.push("quX"):
    stringArray[i]=="echo"?result.push("3ch0")&&result.push("h@ck"):
    stringArray[i]=="foo"?result.push("f00"):
    result.push(stringArray[i]);
}
console.log(result);
//export result
module.exports = result;