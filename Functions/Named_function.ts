/* syntax : 
function function_name(parameter): return_type
{
 block of code
}
 */
// Ex1 : No parameter no return type
function printer():void{
    console.log("I am function with no parameter and no return type")
}

printer()

//Ex2 With parameter but no return type
function sum(x:number,y:number):void
{
    console.log("Sum of numbers are ",x+y)
}
sum(500,100);

//EX3 With return type but no parameter
let a:number=500, b:number=100, result:number;
function difference():number
{
   
   return a-b;

}
result = difference();
console.log("Result is : ", result)

//Ex4 Witj return type and parameter

function identify_animal( value:string): string{
     return value;

}
let answer: string = identify_animal("Camel")
console.log("Animal is ",answer)
