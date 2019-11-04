import React, {createRef, useRef, useState} from 'react';

 export default () => {

    const [formState, setFormState] = useState({
        email: 'yariv@nerdeez.com',
        password: '12345'
    })

    const handleLogin = (event) => {
        console.log(
            `
                Email:  ${formState.email}
                Password:  ${formState.password}
            `
        );

        event.preventDefault();
    }

    const handleChange = (event) => {
        setFormState({
            ...formState, 
            [event.target.name]: event.target.value
        })
    }

     return (
         <form noValidate onSubmit={handleLogin}>
                <h1>Login Function Controlled</h1>
             <div className="form-group">
                 <label> Email </label>
                 <input  
                    value={formState.email}
                    onChange={handleChange}
                    type="email" className="form-control" name="email" />
             </div>
             <div className="form-group">
                 <label> Password </label>
                 <input  
                    onChange={handleChange}
                    value={formState.password}
                 name="password" type="password" className="form-control" />
             </div>
             <div className="form-group">
                 <button className="btn btn-primary" type="submit">Login</button>
             </div>
         </form>
     )
 }