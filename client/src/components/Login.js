import React from "react";

const Login = () => {
    function loginUser(e){
        e.preventDefault();
        console.log("user logged in");
    }

    return (
        <div>
            <h1>Login</h1>
        <form onSubmit={loginUser}>
            <label>Username:</label>
            <input type="text" name="username" placeholder="username"/><br/>
            <label>Password:</label>
            <input type="password" name="password" placeholder="password"/><br/>
            <button>Login</button>

        </form>
        </div>
    )
}

export default Login;