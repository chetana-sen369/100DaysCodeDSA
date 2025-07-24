//100 Days of Code
//Day-03
//problem-01: Detect and Merge Duplicate Product Entries (Advanced Cleanup).
// Expected Output:
// [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]

let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
 
//using filter
let repeated=[];
let cleanedInventory=inventory.filter((product)=>{
    let lowerName=product.name.toLowerCase();
    if(repeated.includes(lowerName)){
        return false;
    }else{
        repeated.push(lowerName);
        return true;
    }
})
console.log(cleanedInventory);

//using map method
// let repeated=[];
// let lowerName=inventory.map(p=>p.name.toLowerCase());
// let cleanedInventory=inventory.filter((product,index)=>{
//     return lowerName.indexOf(product.name.toLowerCase())===index;
// })
// console.log(cleanedInventory);

//problem-01: using set 
let newSet= new Set();
let newInventory=inventory.filter((product)=>{
     let lowerName=product.name.toLowerCase();
     if(newSet.has(lowerName)){
        return false;
     }else{
        newSet.add(lowerName);
        return true;
     }
})
console.log(newInventory);

//problem-02: Group Transactions by Category and Sum Amounts
// Expected Output:
// {
//   Food: 200,
//   Transport: 120,
//   Shopping: 300
// }

let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];
let group=transactions.reduce((acc,curr)=>{
    let category=curr.category;
    let amount=curr.amount;
    if(!acc[category]){
        acc[category]=amount;
    }else{
        acc[category]+=amount;
    }
    return acc;
},{});
console.log(group);
