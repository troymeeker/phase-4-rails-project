import React, { useState } from "react";


const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
    function loginUser(e){
        e.preventDefault();
        // console.log("user logged in");
        fetch('/login', {
            method:"POST", 
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            })
            .then((res) => res.json())
            .then((user)=> onLogin(user));
    }

    return (
        <div>
            <h1>Login</h1>
        <form onSubmit={loginUser}>
            <label>Username:</label>
            <input 
                type="text" 
                placeholder="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                /><br/>
            <label>Password:</label>
            <input type="password" name="password" placeholder="password"/><br/>
            <button >Login</button>

        </form>
        </div>
    )
}

export default Login;