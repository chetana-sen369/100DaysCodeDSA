//100 Days of Code
//Day-14
//Topic: Sliding Window Technique
//Difficulty: Medium
//Approach Required: Brute-force Only ❌ No optimized solution allowed today!
//Problem Statement:You are working on a website analytics dashboard.
//  You receive hourly visitor counts for a website as an array visitors[], 
// where each element represents the number of users visiting the site in that hour.
//Input: visitors = [120, 80, 100, 90, 150, 110, 70], k = 3  
//Output: 270
function minSum(arr,k){
    let sum=Infinity;
    for(let i=0;i<=arr.length-k;i++){
        let minSum=0;
        for(let j=i;j<i+k;j++){
             minSum+=arr[j];
        }
        sum=Math.min(sum,minSum);
    }
    return sum;
}
console.log(minSum([120, 80, 100, 90, 150, 110, 70],3))