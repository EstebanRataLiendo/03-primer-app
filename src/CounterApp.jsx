//importo los states
import { useState } from 'react';
//importo los props
import PropTypes from 'prop-types';

//creo y exporto una función que usa states
export const CounterApp = ({value})=> {

    //desestructuro dos valores, el primer elemento tendrá el valor inicial del state que le demos
    //luego se irá actualizando según los hooks
    //el segundo elemento es el que le dice a React que hubo un cambio en el state y debe actualizarse
    const [ counter, setCounter ] = useState( value )

    //creo una función que agrega 1 al primer elemento que desestructuré y se lo asigno al segundo elemento
    const sumar= ()=> setCounter(counter+1)
    const restar= ()=> setCounter(counter-1)
    const reset= ()=> setCounter(value)

    //actualizo la pagina con jsx
    return (
    <>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        <button onClick={sumar}>+1</button>
        <button aria-label="btn-1" onClick={restar}>-1</button>
        <button onClick={reset}>Reset</button>
    </>
    )
}

//le digo a la app que el elemento value tiene que ser numerico y es requerido 
// CounterApp.propTypes= {
//     value: PropTypes.number.isRequired
// }
