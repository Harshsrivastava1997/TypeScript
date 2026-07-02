//Arrow function with no parameter and no return type

let variable_value = ():void => 
{
    console.log("Welcome to arrow function")
}
variable_value()


//Arrow function with parameter and return type

let add = (x:number,y:number):number =>
{
    return x+y
}
console.log("Addition is : ",add(100,200))

//Arrow function with Implicit return
let product = (x:number,y:number):number => x*y;
console.log(product(10,20))

