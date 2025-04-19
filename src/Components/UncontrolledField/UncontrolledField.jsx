import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passRef = useRef('')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" id="" />
                <br />
                <input ref={passRef} type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;