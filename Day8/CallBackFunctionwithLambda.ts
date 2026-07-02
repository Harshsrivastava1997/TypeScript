let subtractor=(a:number,b:number,divider:(p:number,q:number)=>number):number=>{
    
    console.log("Call Back function output :",divider(500,100))
    return a-b;
}


//Call back function
let divider = (x:number,y:number):number=>{
    return x/y;
}

console.log("Normal function output : ",subtractor(100,50,divider))