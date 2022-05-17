import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';



export const CounterWithHook = () => {

    const {value, addValueToUseState, resetValueToUseState} = useCounter()

  return (
    <>
        <h2>Counter With Hook<small> { value }</small></h2>
        <br />
        <button className='btn btn-primary' onClick={() => addValueToUseState(1)}>
            +1
        </button>
        &nbsp;
        &nbsp;
        <button className='btn btn-primary' onClick={() => addValueToUseState(-1)}>
            -1
        </button>
        &nbsp;
        &nbsp;
        <button className='btn btn-primary' onClick={() => resetValueToUseState()}>
            Reset
        </button>
    </>
  )
}
