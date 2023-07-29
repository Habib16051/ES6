let message = false;

let promise = new Promise((resolve, reject)=> {
    if (message) {
        resolve("Promise is resolved successfully.");
    } else {
        reject("Promise is rejected");
    }
    }
);
promise.then((s)=>{
    console.log(s);
})
promise.catch((e)=>{
    console.log(e);
})