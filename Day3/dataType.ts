let age1:Number=25;
let price:Number=30.5;
let big:Number=432156789;

console.log("Age is : ",age1)
console.log("price is : ",price)
console.log("Big number is : ",big)


//String

let first:string="Harsh"
let last:string='Srivastava'

//To acess values from variable we use $
let gretting:string=`Hello! ${first} ${last} this message is from String`  //Backtick


console.log(gretting)

//Any
let value:any="Welcome"
value=100;
value=true;
console.log(value)
console.log(typeof(value))