//Q1. Add an element to the end of an array using push

let multiple_arr:number[]=[5,10,15,20,25]
multiple_arr.push(30)
console.log("Updated array is : ",multiple_arr)

//Q2. Remove the last element from an array using pop
 multiple_arr.pop()
 console.log("Updated array after deletion is : ",multiple_arr)

 //Q3. Remove the first element from an array using shift
 multiple_arr.shift()
 console.log("After removing first first element arrray is : ",multiple_arr)

 //Q4. Add elements at the beginning of an array using unshift.
 multiple_arr.unshift(40)
 console.log("Array after adding new element in begginig is : ",multiple_arr)

 //Q5. Concatenate two arrays using concat.
 let arra1:number[]=[5,10,15,20]
 let arra2:number[]=[2,4,6,8,10]
 console.log("Concatenated Array is : ",arra1.concat(arra2))

 //Q6. Extract a subarray using slice
 let fruits:string[]=["Apple","Banana","Mango","Orange","Grapes"]
 let extract=fruits.slice(1,3)
 console.log("After slice array is : ",extract)

 //Q7. Insert and delete elements using splice
 //Using same fruits array

 fruits.splice(1,3,"kiwi","Dragon","lichi")
 console.log("After splice array is : ",fruits)

 //Q8. Find the index of a specific element using indexOf
 console.log("Index of kiwi is : ",fruits.indexOf("kiwi"))

 //Q9. Check if an element exists in an array using includes
  console.log("Is Dragon fruits available is fruits array : ",fruits.includes("Dragon"))

  //Q10.  Convert an array to a string using toString
  let new_string1:string=fruits.toString()
  console.log("Converted String is : ",new_string1)

  //Q11. 


