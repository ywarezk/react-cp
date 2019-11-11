/**
 * what is promise?
 */

 // 1. promise is a class
 // 2. Promise is wrapping async code
 // 3. promise can be in: pending, resolved, reject

 // helloPromise: Promise<string>
const helloPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');
        // reject(new Error('something happend'));
    }, 1000)
});

// Promise chaining
// anotherPromise : Promise<number | boolean>
const anotherPromise = helloPromise.then(
    (message) => {
        console.log(message)
        return message.length
    },
    (err) => {
        return true
    }
)

// Promise<Response>
// Response : {json : () => Promise<json>}
// todoJson: Promise<json>
const todoJson = fetch('https://...').then((response) => {
    return response.json()
})

// helloPromise.then(
//     (message) => {
//         console.log(message)
//         return message.length
//     },
//     (err) => {
//         return true
//     }
// ).then(() => ...).then( () => ...)

// from generator functions
// 
async function hello() {
    const promiseContent1 = await promise1;
    await promise2;

    const response = await fetch(...);
    const todosTasks = await response.json()
}

hello();