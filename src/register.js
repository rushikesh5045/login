import React, { useState } from 'react';


const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
        console.log(name);

    }

    return (
        <div className="auth-form-div">
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="name" >Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Rushikesh" id="name" name="name" />
                <label htmlFor="email" >Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="exapmle@gmail.com" id="email" name="email" />
                <label htmlFor="password" >Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit">Register</button>
                <button className="link-btn" onClick={()=>props.onFormSwitch('Login')}>Already have an account? Login here.</button>

            </form>
        </div>
    );
};

export default Register;