//Fuction overloading with different parameters

function getInfo(id:number): string
function getInfo(name:string): string

function getInfo(param:number|string):string
{
    if(typeof(param)==="number")
    {
       return  `User Id is : ${param}`
    }
    else
    {
      return `Uer name is : ${param}`
    }
}

console.log(getInfo(23456))
console.log(getInfo("Harsh"))