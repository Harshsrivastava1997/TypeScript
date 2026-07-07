//Passing array to function and also returning array

function capitalize(a:string[]):string[]
{
    //Creating new  empty array to store result

    //let newarr:string[]=[];

    //converting lowercase to uppaercase and assigning it to new array
    for(let i=0;i<a.length;i++)
    {
         //newarr[i]=a[i].toUpperCase()
        a[i]= a[i].toUpperCase()
    }
    //return newarr;
    return a;


}
//Calling the function
console.log(capitalize(["harsh","srivastava","best","in","World"]))