//Optional paramter means parameter value can be skipped



function dispaly(id:number, name:string, emailId ?:string):void{
    console.log("Nam is :",name)
    console.log("Id is : ",id)
    console.log("Email-id is : ",emailId)
}

//Calling function with only 2 parameter 3rd one will not be passed 

dispaly(1234,"Harsh")