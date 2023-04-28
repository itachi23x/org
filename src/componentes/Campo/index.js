import { useState } from "react"
import "./Campo.css"
const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuración
    const { type = "text" } = props //Estamos creando una constante que se va a llamr type que va a ser igual a props.type 
    //similar al console.log() que estás haciendo abajito

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}> 
        <label> {props.titulo} </label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo