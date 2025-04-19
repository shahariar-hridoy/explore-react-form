import { useState } from "react";

const useInputField = (defaultValue) =>{
    const [fieldValue , setfieldValue] = useState(defaultValue);
    const handleFieldOnChange = e =>{
        setfieldValue(e.target.value);
    }

    return[
        fieldValue,
        handleFieldOnChange
    ];
}

export default useInputField;