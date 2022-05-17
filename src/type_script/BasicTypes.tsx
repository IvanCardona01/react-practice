import React from 'react'
import { LiteralObjects } from './LiteralObjects'

    const name: string = "Ivan Cardona"
    let isActive: boolean = true
    let age: string | number = 19
    age = "20"

    //Arrays
    let tiltes = ['Ingenier', 'Inventor']

export const BasicTypes = () => {
  return (
    <>
        <h2>BasicTypes</h2>
        {name}, {age}, {isActive? 'is Active': 'is not active'}
        <br />
        <p> Titles
            <br />
            {tiltes[0]}
            <br />
            {tiltes[1]}
            <br />
        </p>
        <br />
        <br />
        <hr />
        <LiteralObjects/>
    </>
  )
}
