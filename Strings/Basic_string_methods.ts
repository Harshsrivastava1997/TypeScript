//Convert a string to uppercase using toUpperCase.
let str:string="harsh welcom TO type scriPT"
console.log(str.toUpperCase())

//Convert a string to lowercase using toLowerCase.
let str2:string="WE ARE READING TYPESCRIPT TO GET aUTOMATION JOB"
console.log(str2.toLowerCase())

//Get a character at a specific index using charAt().
let str3:string="WE ARE READING TYPESCRIPT TO GET aUTOMATION JOB"
console.log(str3.indexOf("READ"))

//Find the position of a word using indexOf()
let str4:string="WE ARE READING TYPESCRIPT TO GET aUTOMATION JOB!"
console.log(str4.indexOf("JOB"))

//Check if a string includes a word using includes()
console.log(str4.includes("ARE"))

//Check if a string starts with a specific word using startsWith()
console.log(str4.startsWith("WE"))

//Check if a string ends with a specific word using endsWith()
console.log(str4.endsWith("!"))

//Replace a word in a sentence using replace().
console.log(str4.replace("READING","Implementing"))

//Split a sentence into words using split() and remove leading/trailing spaces using trim().
let str_5:string="  Hello and Welcome , to playwright   "
console.log(str_5.split(","))
console.log(str_5.trim())

//Concat two strings
let str_6:string="Hello"
let str_7:string=" Welcome to typescript"
console.log(str_6.concat(str_7))