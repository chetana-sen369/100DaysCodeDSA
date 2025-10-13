//100 Days Of Code
//Day-57
//Challenge - "Decode the String" 
//Problem Statement:
//You are given an encoded string where patterns are of the form k[encoded_string], 
// and the encoded_string inside the square brackets is repeated exactly k times.
//Return the decoded string.

class Stack {
    constructor() {
        this.nums = [];
        this.chars=[];
    }

  stringDecoder(str){
    let currentNum=0;
    let currentStr="";
   for(let char of str){
        if(!isNaN(char)){
            currentNum=currentNum * 10 + Number(char);
        }else if(char==='['){
            this.nums.push(currentNum);
            this.chars.push(currentStr);
            currentNum = 0;
            currentStr = "";

            } else if (char === ']') {
                const repeatCount = this.nums.pop();
                const prevStr = this.chars.pop();
                currentStr = prevStr + currentStr.repeat(repeatCount);

            } else {
                currentStr += char;
            }
        }

        return currentStr;
    }
}


const s1 = new Stack();
console.log(s1.stringDecoder("3[a2[c]]"));
const s2=new Stack();
console.log(s2.stringDecoder("2[abc]3[cd]ef"))