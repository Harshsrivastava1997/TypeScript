let person={
             name: "Harsh",
             agevalue:25
}
for(const key in person)
{
    console.log(key,person[key as keyof typeof person]);
}