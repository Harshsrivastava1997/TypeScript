function greet(name:string,smg:(message:string)=>void)
{
    console.log("Hello , ",name)
    smg ("Hello ")
}
function showMessage(message:string)
{
    console.log(message)
}
greet("Harsh",showMessage)