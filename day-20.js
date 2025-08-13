//100 Days Of Code
//Day-20
//Task: Solve this problem using an optimized approach (think sliding window, avoid nested loops).
//Problem Statement:You are working on a website analytics dashboard.
//  You receive hourly visitor counts for a website as an array visitors[],
//  where each element represents the number of users visiting the site in that hour.
//Your task is to find the minimum total number of visitors in any k consecutive hours.
//Input:visitors = [120, 80, 100, 90, 150, 110, 70]  k = 3
//Output:270
function minSum(arr,k){
    let length=arr.length;
    if(k>arr.length) return null;
    let current_sum=0;
    for(let i=0;i<k;i++){
           current_sum+=arr[i];
    }
    let minSum=current_sum;
    for(let i=k;i<arr.length;i++){
        current_sum=current_sum-arr[i-k]+arr[i];
          if(current_sum<minSum){
            minSum=current_sum;
          }
    }
    return minSum;
}
console.log(minSum([120, 80, 100, 90, 150, 110, 70],3))
