import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/index"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {  //Nueva función
        evento.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color}) // Recuerda el primer titulo es la llave y el segundo titulo es el valor.
        //Lo mismo sucede con color pero como ambos llevan el mismo nombre se puede obviar y dejar solo uno
    }

    return <section className="formulario"> 
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required={true} 
            valor={nombre} 
            actualizarValor={actualizarNombre}/>

            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required 
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />

            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required 
            valor={foto} 
            actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />

            <Boton texto="Crear"/> 
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>

            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required={true} 
            valor={titulo} 
            actualizarValor={actualizarTitulo}/>

            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex" 
            required 
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton texto="Registrar equipo"/>
        </form>
        </section>
}

export default Formulario

/*
onSubmit es un evento nativo de HTML que sirve para vincular 
la función manejarEnvio y la etiqueta <form> del formulario

FORMA 1
const manejarEnvio = (evento) => {  //Nueva función
        evento.preventDefault()
        console.log("Manejar el envio", evento)
    }

FORMA 2
const manejarEnvio = (event) => {  //Nueva función
        event.preventDefault()
        console.log("Manejar el envio", event)
    }

FORMA 3
const manejarEnvio = (e) => {  //Nueva función
        e.preventDefault()
        console.log("Manejar el envio", e)
    }

evento o event o e estás dos últimas son las más usadas

*/

/* Otra manera de hacer EL BOTON, el componente que abre y el componente que cierra 

------FORMA 2
<Boton> 
  Crear  --> este es un children
  <img src="/favicon.png" alt="icono"/>  --> este es otro children
</Boton>

Ahora children es un arreglo:

children:["crear",<img />]

En el index.js de boton

-----FORMA 2
import "./Boton.css"
const Boton = (props) => {
    return <button className="boton">{props.children}</button>
}

export default Boton

Entonces podemos usar el props.children o el props.texto como tu gustes. ENTONCES TIENES 2 OPCIONES DE USO AQUÍ

-----FORMA 1
import "./Boton.css"
const Boton = (props) => {
    return <button className="boton">{props.texto}</button>
}

export default Boton

REACT es una SPA o Single Page Application

*/

