/**
 * wrap in one tag
 */

 // error
 const siblings = (
     <div>hello world</div>
     <h1>foo bar</h1>
 )

 // ok
 const siblings1 = (
     <div>
         <div>hello world</div>
        <h1>foo bar</h1>
     </div>
    
)

const options = (
    <React.Fragment>
        <option value="3">hello</option>
        <option value="4">world</option>
    </React.Fragment>
)

const options = (
    <>
        <option value="3">hello</option>
        <option value="4">world</option>
    </>
)

// <select><option>...</select>