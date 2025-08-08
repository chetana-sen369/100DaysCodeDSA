//100 days of code
//Day-16
//problem: Challenge: Count Occurrences of Anagrams
//Given a string txt and a pattern string pat,
//your task is to count how many times an anagram 
// of pat appears in txt as a substring.
//Input: txt = "forxxorfxdofr", pat = "for"
//Output: 3

function anagramOccurance(txt,pat){
    let count=0;
     let sortedPat=pat.split("").sort().join("");
      for(let i=0;i<=txt.length-pat.length;i++){
        let subString=txt.slice(i,i+pat.length);
        let sortedSubString=subString.split("").sort().join("");
       if(sortedSubString===sortedPat){
        count++;
       }
    }
    return count;
}
console.log(anagramOccurance("forxxorfxdofr","for"));