function varScope()
{
    if(true)
    {
        var msg ="Hello World"
    }
    console.log(msg)    //Since var is functional scope this will work outside of if condition
}
varScope()


//Hoisting
console.log(a)
var a=10