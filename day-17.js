//100 Days of Code
//Day-17
//problem-1: Find the length (number of elements) of the longest contiguous subarray whose sum is ≤ k.
//input: nums[2,1,5,1,3,2] k=8
function longestSum(arr,k){
    let maxLength=0;
    for(let i=0;i<arr.length;i++){
        let currLength=0;
        for(let j=i;j<arr.length;j++){
            currLength+=arr[j];
            if(currLength<=k){
                maxLength=Math.max(maxLength,(j-i+1));
            }
        }
    }
    return maxLength;
}
console.log(longestSum([2,1,5,1,3,2],8));