//Using genric array type to declare and store data

let empName:Array<string>=["John","Smith","Scott","Peter"]

console.log(empName)


//Storing multiple types of data


let data:Array<any>=["Harsh",1,true,null]

console.log(data)


//Getting specific value from data array
console.log(data[2])

//Getting all vlaues from data array

for(let i=0;i<data.length;i++)
{
  console.log("Value at ",i,"position is : ",data[i])
}

//For-in loop

for(let j in empName)
{
  console.log(empName[j])
}

