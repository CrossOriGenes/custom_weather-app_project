import { useState } from "react";


function useInput(validateData) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const hasError = validateData(enteredValue) && isTouched;
    const isValid = !hasError && isTouched;

    const valueChangeHandler = event => { setEnteredValue(event.target.value); }
    const valueInputBlurHandler = () => { setIsTouched(true); }
    const resetHandler = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        valueInputBlurHandler,
        resetHandler
    };
}

export default useInput;