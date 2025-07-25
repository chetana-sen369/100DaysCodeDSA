//100 Days of Code
//Day-05
//problem-01: Separate Phone Numbers
//Expected Output:{
//            indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
//            usNumbers: ["+14085551234", "+12345678901"]
// }
const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];
let indianNumbers=[];
let usNumbers=[];
let object={};
indianNumbers=phoneNumbers.filter((num)=> num.startsWith("+91"));
usNumbers=phoneNumbers.filter((num)=> num.startsWith("+1") );
object.indianNumbers=indianNumbers;
object.usNumbers=usNumbers;
console.log(object);

//problem-02: Insert Product in Cart
//Expected Output:[101, 103, 102, 104]
let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(1,0, newProduct);
console.log(cart);

//problem-03: Insert Student in Waiting List
//Output:["Ali", "John", "Sara", "Aarav"]
let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent);
console.log(waitingList);



