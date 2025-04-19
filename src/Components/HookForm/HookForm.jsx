import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('')
    const [pass, passOnChange] = useInputField('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit',name,email ,pass);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" onChange={nameOnChange} defaultValue={name} placeholder='name' />
                <br />
                <input type="email" onChange={emailOnChange} defaultValue={email} />
                <br />
                
                <input type="password" placeholder='pass' onChange={passOnChange} defaultValue={pass} />
                <br />
                <input type="submit" />

                
            </form>
        </div>
    );
};

export default HookForm;