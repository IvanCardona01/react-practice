import React from 'react'
import { Functions } from './Functions'


export const LiteralObjects = () => {

    const person = {
        name: 'Ivan',
        age: 20,
        adress: {
            country: "Colombia",
            houseNumber: 5
        }
    }

  return (
    <>
        <h2>Literal Objects</h2>
        <br />
        { JSON.stringify( person, null, 2 ) }
        <br />
        <br />
        <Functions/>
    </>
  )
}
