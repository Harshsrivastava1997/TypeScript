//With Different return types

function processInput(str:string):string
function processInput(num:number):number

function processInput(param:string|number):string|number
{
    if(typeof(param)==="string")
    {
        return `String value is : ${param}`
    }

    else
    {
        return `Number value is : ${param}`
    }
}

console.log(processInput(2500))
console.log(processInput("Srivastava"))