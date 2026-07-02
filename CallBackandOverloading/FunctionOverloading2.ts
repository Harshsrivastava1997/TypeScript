//Function overloading with different number of paramatres



function sum(a:number,b:number):number
function sum(a:number,b:number,c:number):number

function sum(a:number,b:number,c?:number):number
{
    if(c!==undefined)
        return a+b+c

    else
        return a+b;

}

console.log(sum(10,20))
console.log(sum(100,200,300))