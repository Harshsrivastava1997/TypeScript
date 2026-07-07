//Searching an element in array using function 

function search( n:number, arr:number[]):boolean
{
       for (let i=0;i<arr.length;i++)
       {
        if(arr[i]===n)
            return true;

       
    }
    return false;
}
console.log("Element found : ? ",search(60,[10,20,30,40,50]))