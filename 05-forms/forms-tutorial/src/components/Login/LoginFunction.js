/**
 * Function component
 * login form
 * input email
 * input password
 * submit
 */

 import React, {createRef, useRef} from 'react';

 export default () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (event) => {
        console.log(
            `
                Email: ${emailRef.current.value} 
                Password: ${passwordRef.current.value} 
            `
        );

        event.preventDefault();
    }

     return (
         <form noValidate onSubmit={handleLogin}>
                <h1>Login Function</h1>
             <div className="form-group">
                 <label> Email </label>
                 <input ref={emailRef} type="email" className="form-control" name="my-email" />
             </div>
             <div className="form-group">
                 <label> Password </label>
                 <input ref={passwordRef} name="my-password" type="password" className="form-control" />
             </div>
             <div className="form-group">
                 <button className="btn btn-primary" type="submit">Login</button>
             </div>
         </form>
     )
 }