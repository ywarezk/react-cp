import {useState} from 'react';

export default function useForms(initialState) {
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event) => {
        setFormState({
            ...formState, 
            [event.target.name]: event.target.value
        })
    }

    return [handleChange, formState];
}