import React, { useState } from 'react'

export const useForm = <T extends Object>(form: T) => {
  
    const [state, setState] = useState( form )

    const onChange = (value: string, place: keyof T) => {
        setState({
            ...state,
            [place]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange
    }
}
