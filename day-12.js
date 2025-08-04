//100 Days of Code
//Day-12

//problem-01:  Challenge: Maximum Sum of K Consecutive Elements (Brute-Force Only)
//Problem Statement:
//You are analyzing website traffic logs. The array visits contains the number of users who visited 
// the site on each day. You are asked to find the maximum number of visitors in any k consecutive days.
// Input:visits = [10, 20, 30, 40, 50, 60, 70]  ,k = 3
//Expected Output:180
function maxSum(arr,k){
    let sum=0;
    for(let i=0;i<=arr.length-k;i++){
        let currSum=0;
        for(let j=i;j<i+k;j++){
            currSum+=arr[j];
        }
        sum=Math.max(sum,currSum);
    }
    return sum;
}
console.log(maxSum([10, 20, 30, 40, 50, 60, 70]  
,3));
