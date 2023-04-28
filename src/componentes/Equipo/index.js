import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //DESTRUCTURACIÓN
    const { colorPrimario, colorSecundario, titulo, id } = props.datos /*  quiero que saques valores y crees variables con props.datos */
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    /*  
    const colorPrimario = props.datos.colorPrimario // se podria ver asi pero la idea es no repetir a cada momento props.datos.colorPrimario, etc.
    const colorSecundario = props.datos.colorSecundario
    */
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    console.log(colaboradores.length > 0) // Esto se convierte en un true o en un false
    
    const estiloTitulo = { borderColor: colorPrimario }



    return <>
    { colaboradores.length > 0 && 
        <section className="equipo" style={obj}> 
        <input 
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario, 0.6)}
            onChange={(evento) => {
                actualizarColor(evento.target.value, id)
            }}
        />
        <h3 style={ estiloTitulo }>{titulo}</h3>
        <div className="colaboradores"> 
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
            
    </div>
    </section>
    }
    </>
}

export default Equipo