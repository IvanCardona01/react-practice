import React, { useState } from 'react';



export const Counter = () => {

    const [value, setvalue] = useState(0)

    const addValueToUseState = (number: number) => {
        setvalue(value + number)
    }

  return (
    <>
        <h2>Counter<small>{ value }</small></h2>
        <br />
        <button className='btn btn-primary' onClick={() => addValueToUseState(1)}>
            +1
        </button>
        &nbsp;
        <button className='btn btn-primary' onClick={() => addValueToUseState(-1)}>
            -1
        </button>
    </>
  )
}
