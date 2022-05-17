import React from 'react'
import { Counter } from './components/Counter';
import { BasicTypes } from './type_script/BasicTypes';
import { CounterWithHook } from './components/CounterWithHook';
import { Login } from './components/Login';
import { Users } from './components/Users';
import { Form } from './components/Form';
import { useState } from 'react';

const App = () => {

  return (
    <div className="mt-2">
        <h1>Reinforcement TS -React</h1>
        <hr/>
        <br/>
        {/*<BasicTypes/>*/}
        {/*<Counter/>*/}
        {/*<CounterWithHook/>*/}
        {/*<Login/>*/}
        {/*<Users/>*/}
        <Form/>
    </div>
  )
}

export default App;