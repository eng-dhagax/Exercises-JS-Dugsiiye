// Exercise 27

function deleyedMessege () {

    return new Promise ( (resolve, reject) => {

        setTimeout ( () => {
            const success = false;

            if (success) {
                resolve("Success! The Promise resolved after 2 seconds.");
            } else {
                reject("Error! Something went wrong.");
            }
        }, 2000)
    })
};

deleyedMessege() 
        .then( (messege) => console.log(messege))
        .catch( (error) => console.log(error))