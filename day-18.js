//100 Days of Code
//Day-18
//Topic: Arrays - Sliding Window (Optimized Approach)
//Problem:"Longest Subarray with Sum ≤ K"
//Input:  nums = [4, 2, 1, 7, 8, 1, 2, 8, 1], k = 8  
//Output: 3 
function slidingWindowOpt(arr, k) {
    let start = 0;
    let sum = 0;
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        while (sum > k) {
            sum = sum - arr[start];
            start++;
        }
            let currentLength = i - start + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        
    }
    return maxLength;
}
console.log(slidingWindowOpt([4, 2, 1, 7, 8, 1, 2, 8, 1],8));



