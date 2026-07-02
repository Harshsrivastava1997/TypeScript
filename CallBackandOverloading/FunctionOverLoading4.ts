//With three different types of parameter

function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string


function greet(value:number|string|boolean):string
{
    if(typeof value==="string")
    {
       return `Hi! your given name is : ${value}`
    }
    else if(typeof value==="number")
    {
        return `Hi! your age is : ${value}`
    }
    else 
    {
        return `Hi are you married ? ${value}`
    }
}
console.log(greet(45))
console.log(greet("Harsh"))
console.log(greet(true))