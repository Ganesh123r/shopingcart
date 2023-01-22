import React from 'react';
import './login.css'

function Login(){
    return(
        <div className='login'>
            <h1>About Login</h1>
            
            <label for="name">Name</label>
            <input type ="text" name="name" placeholder='enter username'/><br></br>
            <label for="password">Password</label>
            <input type ="text" name="password" placeholder='enter password'/><br></br>
            <button id="demo">Login</button>

        </div>
    )
}

export default Login;