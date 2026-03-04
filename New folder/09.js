let p1 = new Promise((resolve, reject) => {
    console.log("___Altered___");
    
    setTimeout(() => {
        resolve("resolved")
    }, 2000)
});


p1.then(() => {
    console.log("hurray");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("second resolved")
        }, 3000)
    });
}).then((value) => { console.log(value); })
p1.then(() => {
    console.log("Congratulations this promise is now resolved");
})
