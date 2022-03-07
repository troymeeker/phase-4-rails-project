import React, { useState } from "react";


const Login = ({setCurrentUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [login, setLogin] = useState('')

    function loginUser(e){
        e.preventDefault();
       
        // const user = {
        //     username, 
        //     password
        // }
        fetch('/login', {
            method:"POST", 
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            })
            .then((res) => {
                if(res.ok){
                    res.json().then(user => {
                         setCurrentUser(user)
              })
            } else {
                res.json().then(errors => { 
                     console.log(errors)
                     alert("Please create your account below before logging in")
                    })
            }
           
    })
             setUsername('')
             setPassword('')
    }

    return (
        <div className="login">
            <h1>Login to Existing Account:</h1>
        <form onSubmit={loginUser}>
            <label>Username:</label>
            <input 
                type="text" 
                name="username" 
                value={username} 
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                /><br/>
            <label>Password:</label>
            <input
                type="password"
                name=""
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
               /><br/>
            <button >Login</button>

        </form>
        </div>
    )
}

export default Login;