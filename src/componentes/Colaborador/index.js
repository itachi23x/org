import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai" //Es una subcarpeta que existe en REACT icons

const Colaborador = (props) => {            
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const {colorPrimario, eliminarColaborador, like} = props 

    // condicion ? verdadero : falso


    return <div className="colaborador">
        < AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
           <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4> {/*Harland Lohora ahora ya no será algo estático sino será una información que venga de afuera  */}
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> :  <AiOutlineHeart onClick={()=> like(id)}/>}
            
           

        </div>
    </div>
}

export default Colaborador
