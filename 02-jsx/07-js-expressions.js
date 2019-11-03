/**
 * i can put in the jsx
 * JS expressions
 * { }
 */

 const div = <div> { Math.random() } </div>

 const div2 = <div className={'hello-' + Math.random()}></div>

 const div3 = <div> {<div className="hello"></div>} </div>

 // what i can put between tags

 // falsey => maps to nothing
// true => maps to nothing

// lets do an if

const booleanExpression = true;
const div4 = <div> { booleanExpression && <h1>user is logged in</h1> } </div>
const div5 = <div> { booleanExpression || <h1>user is logged out</h1> } </div>
const div6 = <div>{ booleanExpression ? (<h1>user is logged in</h1>) 
    : (<h1>user is logged out</h1>) } </div>

// string / number

const div7 = <div> {Math.random()} </div>

function Hello() {
    return (<h1>hello world</h1>)
}

// React.createElement / React Component
const div8 = <div> {<Hello />} </div>

// array
const list1 = (
    <ul>
        {
            [
                <li>hello</li>,
                true,
                false,
                'foo bar',
                <li>lurem</li>
            ]
        }
    </ul>
)

const todoList = [
    'Walk with Piglet',
    'Play Piglet',
    'Buy tofu'
]

// Array.protoype.map
const list2 = (
    <ul>
        {/* <li>walk with piglet</li>
        <li>...</li>
        <li>...</li> */}

        {
            /*[
                <li>...</li>
            ]*/
        }

        {
            (function() {
                const lis = [];
                for (let item of todoList) {
                    lis.push(
                        <li>{ item }</li>
                    )
                }
                return lis;
            })()
            
        }

        {
            todoList.map(function(todoItemString, index) {
                return <li key={index}>{todoItemString}</li>
            })
        }
    </ul>
)



