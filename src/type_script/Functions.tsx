import React from 'react'


let cube = ''
const paintCube = (file: number, colum: number ,tam: number, cube: string): string => {
    if (file > tam) {
        return cube 
    }else{
        if (colum > tam){
            cube += "\\n"
            return paintCube(file+1,  0, tam, cube)
        }else{
            if( file == 0 || colum == 0 || file == tam || colum == tam){
                cube += "*"
            }else {
                cube += "+"
            }
            return paintCube(file, colum + 1, tam, cube)
        }
    }
}


export const Functions = () => {
  return (
    <>
        <hr />
        <h2>Functions</h2>
        <br />
        <br />
        <span>Recursive function</span>
        <br />
        { paintCube(0, 0, 5, '') }
    </>
  )
}
