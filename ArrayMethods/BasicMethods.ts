//1.   Push method

//Creating and defining array

let fruits:string[]=["Apple","Banana","Oranges"]

//using push method to add 1 element
console.log(fruits.push("Avacado"))

//printing fruits array to check added elememnt
console.log(fruits)


//2.  Pop Method ----- Removes last element from array

console.log(fruits.pop())
console.log("After pop method fruits array is : ")
console.log(fruits)

//3. shift method -------Removes first element from array
console.log("Shift Method codes")
let num:number[]=[1,2,3,4,5]

let first_num= num.shift()
console.log("After shift method array is : ",num)
console.log("removed elemenet is : ",first_num)

//4. unshift method --------Add one or more elemenets at begining of array

console.log("Unshift method code")
let boolArray:boolean[]=[false,false,false,false]
console.log("After applying unshift method")
console.log(boolArray.unshift(true,true))
console.log(boolArray)


