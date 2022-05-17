import { useState } from "react"


export const useCounter = () => {
    const [value, setvalue] = useState(0)

    const addValueToUseState = (number: number) => {
        setvalue(value + number)
    }

    const resetValueToUseState = () => {
        setvalue( 0 )
    }
    return {
        value,
        addValueToUseState,
        resetValueToUseState
    }
}
    
    