// Exercise 26

function UserData () {
    alert(`Fetching user data`);

    return {name: "Real_Dhagax", id: 5836}
};

console.log(`Start user data`);

console.log(UserData());

function getUserData(callback) {
    setTimeout( () => {
        let user = {city: "Afgoi", age: 20};
        callback(user);
    }, 2000);
};

console.log(`Continue user data`);

getUserData(function(callback) {
    console.log(callback)
});

console.log(`This messege show up immediatly`)