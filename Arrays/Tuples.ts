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