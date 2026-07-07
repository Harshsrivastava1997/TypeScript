//Tuples with two values

let person:[string,number]=["Harsh",101]

console.log(person[1])
console.log(person[0])

//Tuple with multiple values

let values:[string,number,boolean,string,number]=["Harsh",101,true,"test",202]

console.log(values)


//Reading data from values tuple
for(let i=0;i<values.length;i++)
{
    console.log("Element at ",i,"position in values tuple is : ",values[i])
}

//Reading data using for-of loop
let dataset:[string,number,boolean,string,number]=["Srivastav",1001,false,"test",2002]

for(let data of dataset)
{
    console.log("For-of loop output ",data)
}

//Reading data using for-in loop
let dataset1:[string,number,boolean,string,number]=["Tesrt",10001,false,"tewerst",20024]

for(let i in dataset1)
{
    console.log("For-in loop output at ", i, "postion is : ", dataset1[i])
}