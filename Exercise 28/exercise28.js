// Exercise 28

function deleyedMessege () {

    return new Promise ( (resolve, reject) => {

        setTimeout ( () => {
            const success = true;

            if (success) {
                resolve("Success! The Promise resolved after 2 seconds.");
            } else {
                reject("Error! Something went wrong.");
            }
        }, 2000)
    })

};

async function desplayUserMessege () {

    try {
        const msg = await deleyedMessege();
        console.log(msg)
    } catch (error) {
        console.log(error)
    }
};

desplayUserMessege()