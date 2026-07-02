/* Theory:
  It does not restrict number of paramter you can pass to function,
   you can pass any number of parameter
   There is no limit in parameter  */



function addNumber(...nums:number[]):void{
    let i;
    let sum:number=0;

    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
    }
    console.log("Sum of numbers is : ",sum);
}
addNumber(5,10,15,20)
addNumber(500,1000,2000,50000);



//Rest parameters of multiple types
function Count(...elements:(number|string)[]) : number{
    return elements.length;
}
console.log(Count (3,"Harsh",2,1,"Scott"));