import { useState } from "react";

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState); //useForm recibe un objeto(initialState)

    const reset = () => {  //creo un nuevo metodo para resetear el formulacion
        setValues (initialState)
    }

    const handleInputChange = ({ target}) => {
        setValues({
            ...values, [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];
}