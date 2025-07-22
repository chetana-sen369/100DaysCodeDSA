//100 Days of Code
//Day-01

//problem-01:Remove Discontinued Products
//Expected Output: ['Laptop', 'Mobile', 'Watch']
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2,2);
console.log(products);

//problem-02: Add New Students in Between
// Expected Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1,0,"Nina","Omar");
console.log(students);

//problem-03:Extract Top Performers
// Expected Output: ['Zainab', 'Ali', 'Farhan']
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
console.log(scores.slice(0,3));

//problem-04:Show Last 2 Days’ Sales
// Expected Output: [390, 310]
let sales = [220, 300, 280, 150, 400, 390, 310];
console.log(sales.slice(5,7));

//problem-05: Get All Users who are Active
// Expected Output: 
// [{name: 'Ahmed', active: true}, {name: 'John', active: true}]
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let array=users.filter(user => user.active===true);
console.log(array);

//problem-06:Block Short Phone Numbers
//Expected Output: ['1234567890', '9876543210']
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let phno=phoneNumbers.filter(number=>number.length===10);
console.log(phno);

//problem-07: Convert price with 18% of GST tax
//Expected Output: [118, 236, 354]
let prices = [100, 200, 300];
prices.forEach((price,i)=>{prices[i]=price*1.18});
console.log(prices);

//problem-08: Append “.com” to Website Names
// Expected Output: ['google.com', 'amazon.com', 'microsoft.com']
let sites = ['google', 'amazon', 'microsoft'];
sites.forEach((site,i)=>{
   sites[i]=site+".com"});
console.log(sites);

//problem-09:Calculate Total Cart Price
// Expected Output: 2896

let cart = [499, 1299, 299, 799];
let sum=cart.reduce((acc,curr)=> acc+curr);
console.log(sum);

//problem-10: Current Frequency of votes 
// Expected Output: { A: 3, B: 2, C: 1 }
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let vote=votes.reduce((acc={},currVote)=>{
  if(acc[currVote]){
    acc[currVote]+=1;
  }else{
    acc[currVote]=1;
  }
  return acc;
},{});
console.log(vote);
