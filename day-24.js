//100 Days Of Code
//Day 24
//Problem Statement:Given a string s, find the length of the longest substring without repeating characters.
//Input: s = "abcabcbb"  Output: 3  Explanation: The answer is "abc", with length 3.
function subString(s){
   let  subStr=new Set();
   let  left=0;
   let maxLength=0;
    for(let right=0;right<s.length;right++){
        while(subStr.has(s[right])){
            subStr.delete(s[left]);
            left++;
        }
        subStr.add(s[right]);
        maxLength=Math.max(maxLength,subStr.size);
    }
    return maxLength;
}
console.log(subString("abcabcbb"));