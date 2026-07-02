//Callback function: A function passed as argument to other function and executed later

function summer(a:number,b:number,callback:any) 
{
  
  callback()
  return a+b;
}

function xyz()
{
 console.log("I am call back function execution")
}

console.log(summer(10,20,xyz))