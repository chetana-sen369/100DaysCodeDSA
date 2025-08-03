//100 Days of Code
//Day-11
//problem-01: Advanced Two Pointers 
// Find All Unique Triplets That Sum to Zero
//Expected Output:[[-1, -1, 2], [-1, 0, 1]]
function twoPointersAdv(arr,target){
    arr.sort((a,b)=> a-b);//sorting th array first 
     let tripletArr=[];
     for(let i=0;i<arr.length;i++){
        if(i>0 && arr[i]==arr[i-1])continue;//skip duplicates
        let left=i+1;
     let right=arr.length-1;
        while(left<right){
           let sum=arr[i]+arr[left]+arr[right];
          if(sum===target){
            tripletArr.push([arr[i],arr[left],arr[right]]);
            left++;
            right--;
            //skipping duplicates at left and  right
            while(left<right && arr[left]==arr[left+1])left++;
            while(left<right && arr[right]==arr[right-1])right--;
          }else if(sum < target){
            left++;
          }else{
            right--;
          }
        }
     }
     return tripletArr;
}
console.log(twoPointersAdv([-1, 0, 1, 2, -1, -4],0))