//100 Days of Code
//Day-13

//problem-1: Challenge: Longest Productive Streak (Real-World Sliding Window Scenario)
// Problem Statement:
// You’re building a productivity tracker app. The user’s daily productivity over the past few weeks is stored in an array:
//1 (productive day)
//0 (unproductive day)
//You are allowed to flip up to k unproductive (0) days into productive days.
//Your task is to find the maximum length of a productive streak possible after at most k flips.
//input =days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  k = 2
//Expected Output:7

function slidingWindow(arr,k){
    let maxStreak=0;
    for(let i=0;i<arr.length;i++){
        let currentCount=0;
        for(let j=i;j<arr.length;j++){
            if(arr[j]==0){
                currentCount++;
            }
            if(currentCount>k)break;
                let length=j-i+1;
            maxStreak = Math.max(maxStreak, length);   
        }

    }
    return maxStreak;
}
console.log(slidingWindow([1, 0, 1, 1, 0, 0, 1, 1, 1, 0],2))


