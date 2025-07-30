//100 Days of Code
//Day-08
//problem-01: Count Pairs with Given Sum
function twoPointerSum(arr,target){
let left=0;
let right=arr.length-1;
let count=0;
while(left<right){ 
    const sum=arr[left]+arr[right];
    if(sum===target){
        count++;
        left++;
        right--;
    }else{
        left++;
        right--;
    }
}
return count;
}
console.log(twoPointerSum([1,2,3,4,5,6,7],8));

//problem-02:Move Zeros to End
function onePointer(arr){
    let left=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[left],arr[i]]=[arr[i],arr[left]];
            left++;
        }
    }
    return arr;
}
console.log(onePointer([0,0,1,3,12]));