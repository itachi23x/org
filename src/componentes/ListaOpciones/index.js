import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    //Esto es un arreglo
    //Método MAP -> arreglo.map((equipo, index) => {
    //      return <option> </option>
   // })
   /* const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",

    ]*/

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

//arreglo.map es un método de los arreglos

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
           {props.equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option> //Estamos generando una lista de opciones
           })}
        </select>
    </div>
}

export default ListaOpciones 
//Algo bastante utilizado en REACT es el concepto de los arreglos, el concepto de como recorrer un arreglo y a partir de eso tomar los valores y los datos y generar algo nuevo
//Prestale atención a los key={}
/*Este pedazo de código se puede simplificar

<select>
           {equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option> //Estamos generando una lista de opciones
           })}
</select>

por 

<select>
           {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
</select> //Esta es una forma más sencilla de escribir o limpiar el código





/*Vamos a crear un arreglo de strings de la lista de opciones para no escribir tanto código como este

const ListaOpciones = () => {
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            <option>Programación</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>Ux y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option>
        </select>
    </div>
}

*/