import React, {useState} from "react";

import '../css/index.css';

const Signup = ({setCurrentUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    


    function createUser(e){
        e.preventDefault();
        const user ={
            username, 
            password, 
            password_confirmation: passwordConfirmation
        }
        fetch("/signup", {
            method:"POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user)
                })
            } else {
                res.json().then(errors => {
                    alert('Please enter your username and password')
                })
            }
        })
    }

    return (
        <div className="signup" >
            <h2 className="header">Create an account</h2>
            <form onSubmit={createUser}>
                
                <label className="userFormItem">Username</label><br/>
                <input type="text" name="Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
                <label className="userFormItem">Password</label><br/>
                <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                <label className="userFormItem">Confirm Password</label><br/>
                <input type="password" name="password" placeholder="confirm password" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/><br/>

                <button type="submit">Create Account</button>
               
            </form>
            
            </div>
    )
}

export default Signup;