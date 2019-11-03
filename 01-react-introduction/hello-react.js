/**
 * display hello world with React
 */

 // load react app to the container
const container = document.getElementById('container');

// <div><h1><strong><u> hello world with underline </...>

// 
// const div = React.createElement(
//     'div',
//     null,
//     React.createElement(
//         'h1',
//         null,
//         React.createElement(
//             'strong',
//             null,
//             React.createElement(
//                 'u',
//                 null,
//                 'hello world with underline'
//             )
//         )
//     )
// )

// const div = (
//     <div>
//         <h1>
//             <strong>
//                 <u>
//                     hello world with jsx
//                 </u>
//             </strong>
//         </h1>
//     </div>
// )

function HelloWorld() {
    return (
        <div>
            <h1>
                <strong>
                    <u>
                        hello world with jsx with function
                    </u>
                </strong>
            </h1>
        </div>
    )
}

// const h1 = 

ReactDOM.render(
    <HelloWorld />,
    container
)