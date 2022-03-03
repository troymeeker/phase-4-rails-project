import React, {useState} from "react";
import '../css/index.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function createUser(e){
        e.preventDefault();
        console.log('user signed up');
    }

    function changeUsername(e){
        setUsername(e.target.value)
    }

    function changePassword(e){
        setPassword(e.target.value)
    }

    return (
        <div className="userForm">signup  - controlled Form (w/state)

            <form onSubmit={createUser}>
                <h1>Create Account</h1>
                <label className="userFormItem">Username:</label>
                <input type="text" name="Username" placeholder="Username" value={username} onChange={changeUsername}/><br/>
                <label className="userFormItem">Password:</label>
                <input type="password" name="password" placeholder="password" value={password} onChange={changePassword}/><br/>
                {/* <label className="userFormItem">Confirm Password:</label>
                <input type="password" name="password" placeholder="confirm password"/><br/> */}

                <button>Create Account</button>
               
            </form>
            
            </div>
    )
}

export default Signup;