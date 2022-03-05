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
        fetch('/signup', {
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
                    console.log(errors)
                })
            }
        })
    }

    return (
        <div className="userForm">

            <form onSubmit={createUser}>
                <h1>Create Account</h1>
                <label className="userFormItem">Username:</label>
                <input type="text" name="Username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
                <label className="userFormItem">Password:</label>
                <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                <label className="userFormItem">Confirm Password:</label>
                <input type="password" name="password" placeholder="confirm password" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/><br/>

                <button type="submit">Create Account</button>
               
            </form>
            
            </div>
    )
}

export default Signup;