//100 Days of Code
//Day-10
//problem-01: Two Pointers Real-World Edition 
// Expected Output:[[9, 12], [13, 16], [17, 20]]
function twoPointers(userA,userB){
let i=0;
let j=0;
let merged=[];
let mergedResult=[];
while(i<userA.length && j<userB.length){
if(userA[i][0]<userB[j][0]){
    merged.push(userA[i])
    i++;
}else{
    merged.push(userB[j])
    j++;
}
}
//merge remaining intervals
while(i < userA.length){
    merged.push(userA[i]);
    i++;
}
while(j<userB.length){
    merged.push(userB[j]);
    j++;
}
let lastMerged=merged[0];
merged.forEach(current =>{
    if(current[0] <= lastMerged[1]){
        lastMerged[1]=Math.max(lastMerged[1] , current[1]);
    }else{
        mergedResult.push(lastMerged);
        lastMerged=current;
    }
})
mergedResult.push(lastMerged);
return mergedResult;
}
console.log(twoPointers([[9, 11], [13, 15], [18, 20]] ,[[10, 12], [14, 16], [17, 18]]
));