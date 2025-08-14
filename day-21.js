//100 Days Of Code
//Day 21
//Problem Statement:You’re building a productivity tracker. 
// The user has a record of their daily productivity over the past few weeks.
//  Each day is marked as: 1 → productive ,0 → unproductive.
//Input Example:days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]  k = 2
//Expected Output:7
function productiveDay(arr, k) {
    let left = 0;
    let maxStreak = 0;
    let currentCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            currentCount++;
        }
        while (currentCount > k) {
            if (arr[left] == 0) {
                currentCount--;
            }
            left++;
        }
        let length = i - left + 1;
        maxStreak = Math.max(maxStreak, length);
    }
    return maxStreak;
}
console.log(productiveDay([1, 0, 1, 1, 0, 0, 1, 1, 1, 0], 2));
