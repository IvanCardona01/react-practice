import React, { useState } from 'react'
import { type } from '@testing-library/user-event/dist/type';
import { useForm } from '../hooks/useForm';
import { format } from 'path';

export const Form = () => {

    const {form, email, password, onChange} = useForm({
        email: 'test@test.com',
        password: 'password123'
    }); 

  return (
    <>
        <h2>Form Controll</h2>
        <input 
            type="text"
            className="form-control"
            placeholder='Email'
            value={email}
            onChange={({target}) => onChange( target.value ,'email')}
        />

        <input 
            type="text"
            className="form-control mt-2 mb-2"
            placeholder='Password'
            value={password}
            onChange={ ({ target }) => onChange(target.value, 'password')}
        />

        <code>
            <pre>{JSON.stringify(form, null, 2)}</pre>
        </code>
    </>
  )
}
