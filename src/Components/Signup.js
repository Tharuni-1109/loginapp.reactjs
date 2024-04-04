import React, { useState } from 'react';

const Login = () => {

    //how to maintain state
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    //business logic
     const loginUser = (e) => {
        if((username==="admin")&&(password==="admin123"))
        {
            alert("login success");
        }
        else{
            alert("sorry boss..please enter correct details");
        }
        e.preventDefault();
     }
    return (
        <div>
            <center>
                <h2>Welcome to Diet login!!!</h2>
                <form onSubmit={loginUser} method='post'>
                    <label>Enter UserName:</label>
                    <input type='text' 
                    name='username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <label>Enter Password:</label>
                    <input type='password' 
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <label>select gender</label>
            <input type="radio" name="radio"/>
            <label>male</label>
            <input type="radio" name="radio"/>
            <label>female</label>
            <br></br>
<label>Enter Adress:<textarea name=""id=""cols="10" rows="5"></textarea></label>
            <br></br>
            <label>select Qualification</label>
            <select name="select">
                <option value="select">select</option>
                <option value="b.tech">b.tech</option>
                <option value="degree">degree</option>
            </select>
            <br></br>
                    <input type='submit' value='Login'/>
</form>
                    </center>
                    </div>
    )
};       

    
        

export default Login;