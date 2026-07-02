function letScope()
{
    if (true)
    {
        let msg ="Hello Harsh"
        console.log(msg)
    }
    //console.log(msg)  This will not work with let
}
letScope()


let country ="India"
let counry ="USA" // output is still INDIA because re-declaration is not allowed
console.log(country)


//Hoisting
console.log(g)
let g="Test"