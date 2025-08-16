//100 Days Code DSA
//Day-23
//Problem: Minimum Window of Required Ingredients
//Scenario:
//You’re working on an inventory management system for a restaurant. 
// The chef gives you a list of required ingredients for a dish, 
// and you have a list of ingredients available over several deliveries in sequence.
//You need to figure out the shortest continuous sequence of deliveries that contains 
// all the required ingredients at least once.
//Input:  deliveries = ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]  
//required = ["tomato", "cheese", "onion"]  
//Output: 3 
function minWindow(deliveries){
    let minLength=Infinity;
    let left=0;
    let tomatoCount=0;
    let cheeseCount=0;
    let onionCount=0;
    for(let right=0;right<deliveries.length;right++){
        if(deliveries[right]=="tomato"){
            tomatoCount++;
        }
        if(deliveries[right]=="cheese"){
            cheeseCount++;
        }
        if(deliveries[right]=="onion"){
            onionCount++;
        }
        while(tomatoCount>=1 && cheeseCount>=1 && onionCount>=1){
            minLength=Math.min(minLength,right-left+1)
             if(deliveries[left]=="tomato"){
            tomatoCount--;
        }
        if(deliveries[left]=="cheese"){
            cheeseCount--;
        }
        if(deliveries[left]=="onion"){
            onionCount--;
        }
        left++;
        }
    }
    if(minLength==Infinity){
        return -1;
    }else{
        return minLength;
    }
}
console.log(minWindow(["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]  
));

