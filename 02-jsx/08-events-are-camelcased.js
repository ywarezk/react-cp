/**
 * events are camel cased and gets a function
 */

 // error in jsx
 const div = <div onclick="eventInScope"></div>

function hello() {
    console.log('hello');
}

function hello2(msg) {
    console.log(msg);
}

 const div2 = <div onClick={() => hello2('another message')} ></div>