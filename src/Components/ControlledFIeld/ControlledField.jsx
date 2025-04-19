import React, { useState } from 'react';


const ControlledField = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState()

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email ,password);
        if (password.length < 6) {
            setError('Password must be 6 character or longer.')
        }
        else{
            setError('')
        }
    }
    const handleEmailchange = e =>{
        setEmail(e.target.value)
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={handleNameChange}  defaultValue={name} placeholder='name'/>
                <br />
                <input onChange={handleEmailchange} defaultValue={email} type="email" name='email' placeholder='Your Email' required />
                <br />
                <input type="password" name='password' onChange={handlePasswordOnChange} defaultValue={password} placeholder='Enter Password' required />
                <br />
                <input type="submit" />

            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;