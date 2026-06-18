// Exercise 15
const persons = [
    {name: "Jorge", age: 22, city: "Amstardam"},
    {name: "badri", age: 33, city: "beirut"},
    {name: "warsame", age: 44, city: "Mogadisho"}
];

for (let person of persons) {
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    };

    console.log("---")
}