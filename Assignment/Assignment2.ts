//Q11. Iterate through an array using forEach and print each element.
let arr:number[]=[1,2,3,4,5]
arr.forEach(function(element,index)
{
    console.log(`${element}`,`${index}`)
})

//Q12. Create a new array by doubling the values using map.
let arr_1:number[]=[100,200,300,400]
let new_arr=arr_1.map(function(ele){
    return ele*2;
})
console.log(new_arr)

//Q13. Filter out even numbers from an array using filter.
let arr_2:number[]=[10,11,12,13,14,15]
let even_arra=arr_2.filter(function(el){
    if (el%2==0)
    {
        return el;
    }
})
console.log(even_arra)

//Q14. Find the sum of all numbers using reduce.
let arr_3:number[]=[2,3,4,5,6,7]
let sum=arr_3.reduce(function(total,ele)
{
 return total+ele;
})
console.log("Sum of all element in this array is : ",sum)

//Q15. Check if at least one element is even using some
let arr_4:number[]=[3,5,7,13,9,11]
let check_even=arr_4.some(function(ele){
    return ele%2==0
})
console.log("If one element is even :",check_even)

//Q16. Check if all elements are positive using every
let arr_5:number[]=[1,2,3,5,6]
let check_positive=arr_5.every((ele)=> (ele>0))

console.log("If all elements are positive : ",check_positive)

//Q17.  Remove duplicates from an array using filter and indexOf.
      let arr_6:number[]=[2,3,4,2,5,3]
      let updated_arra=arr_6.filter(function(ele,index){
        return arr.indexOf(ele)===index

    })
    console.log("updated arrays is : ",updated_arra)

 //Q18. Reverse an array
 let arr_7:number[]=[1,2,3,4,5,6]
 let reversed_arr:number[]=[]
 for(let i=arr_7.length-1;i>=0;i--)
    {
         reversed_arr.push(arr_7[i])
    }   
    console.log("Reversed array is : ",reversed_arr)