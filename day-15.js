//100 days of code 
//Day-15
// Problem Statement:You're analyzing user browsing behavior. You are given a list of webpages (as strings),
//visited in order, and a window size k. You need to find if any window of k consecutive pages contains all
//unique pages (i.e., no page is repeated).
//If such a window exists, return true. Else, return false.
//Input:pages[] = ["home", "about", "products", "home", "cart", "checkout"]
//Output:true

function uniqueWindow(arr,k){
    for(let i=0;i<=arr.length-k;i++){
        let unique=[];
        for(let j=i;j<i+k;j++){
            if(unique.includes(arr[j])){
                break;
            }else{
                unique.push(arr[j]);
            }
        }
        if(unique.length===k){
            return true;
        }
    }
    return false;
}
console.log(uniqueWindow(["home", "about", "products", "home", "cart", "checkout"],3))
