//100 Days of Code
//Day-09

//problem-01: Remove Duplicate Emails (Like Gmail cleanup)
function originalMails(emails){
let left=0;
for(let i=0;i<emails.length;i++){
    if(emails[i]!==emails[left]){
        left++;
        emails[left]=emails[i];
    }
}
return emails.splice(0,left+1);
}
console.log(originalMails(["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
));

//problem-02: Playlist Duration Matcher (Music App Feature)
function musicApp(arr,target){
    arr.sort((a,b)=>a-b);
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===target){
            return [arr[left],arr[right]];
        }else if(sum<target){
            left++;
        }else{
            right--;
        }
    }
    return arr;
}
console.log(musicApp( [3, 5, 8, 2, 7, 4],10));