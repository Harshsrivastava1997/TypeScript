//5. Concat method -------concat  two arrays and return single array

let num1:number[]=[1,2,3,4,5]
let num2:number[]=[5,6,7]

console.log(num1.concat(num2))


//6 .Slice method ---------Extract a section of array
let num : number[]=[5,10,15,20,25]

let extracted_array=num.slice(1,4)
console.log("Extracted Array is : ",extracted_array)


//7. Splice method ----------Add or delete elements from array from anywhere

let name1:string[]=["Harsh","Srivastva","TypeScript","Learning"]
//Deleting element
let deleted_values=name1.splice(0,2)
console.log("After deleting arrays is : ",name1)
console.log("Deleted elemensts are : ",deleted_values)

//Adding elements

let added_element=name1.splice(1,0,"Playwright","Job")
console.log("After adding elements array is : ",name1)


//8. indexOf method --------- Return index of element in array
console.log("Index of job element is : ",name1.indexOf("Job"))

//9. includes ------------check if element in array exists 
console.log("Is playwright exist in num1 array : ",name1.includes("Playwright"))

//10. toString-----------converts the array to string
let arr1:number[]=[1,2,3,4,5,6]
let new_string:string =arr1.toString();
console.log("converted string is : ", new_string)

