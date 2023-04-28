import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./componentes/Header/Header.js";
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  { 
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  { 
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])
  

const [equipos, actualizarEquipos] = useState ([

  { 
    id: uuid(),
    titulo:"Programación",
    colorPrimario: "#57c278",
    colorSecundario: "#d9f7e9",
  },
  { id: uuid(),
    titulo:"Front End",
    colorPrimario: "#82cffa",
    colorSecundario: "#e8f8ff",
  },
  { id: uuid(),
    titulo:"Data Science",
    colorPrimario: "#a6d157",
    colorSecundario: "#f0f8e2",
  },
  { id: uuid(),
    titulo:"Devops",
    colorPrimario: "#e06b69",
    colorSecundario: "#fde7e8",
  },
  { id: uuid(),
    titulo:"UX y Diseño",
    colorPrimario: "#db6ebf",
    colorSecundario: "#fae9f5",
  },
  { id: uuid(),
    titulo:"Móvil",
    colorPrimario: "#ffba05",
    colorSecundario: "#fff5d9",
  },
  { id: uuid(),
    titulo:"Innovación y Gestión",
    colorPrimario: "#ff8a29",
    colorSecundario: "#ffeedf",
  },


]) 


  //Ternario -> condición ? si es verdadera seMuestra  caso contrario noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

//REGISTRAR COLABORADOR

const registrarColaborador = (colaborador) => {
  console.log("Nuevo colaborador", colaborador)

  //SPREAD OPERATOR: Vam,os a crear una copia de los valores actuales y después simplemente le vamos a agregar el colaborador
  actualizarColaboradores([...colaboradores, colaborador])//Cuando veas un arreglo con 3 puntitos es porque estamos copiando algo
}

//Eliminar Colaborador - Necesitamos que esta función viaje del componente APP.js al componente Equipo y del componente Equipo a componente Colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
} 

//Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar:", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados) //Este es el user state que declaramos encima
}

//Crear equipo

const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {... nuevoEquipo, id: uuid()}])
}


const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
}


  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario/> : <></>} Este seria otra manera de hacerlo */}
      {
      mostrarFormulario === true ? <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <div></div>
      }
      {/* mostrarFormulario && <Formulario/> Este seria otra manera de hacerlo */}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => {
          console.log("Equipo:", equipo)
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        })
      }

      <Footer />

      {/* equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} /> Esta es una manera más simplificada de hacerlo) */}

    </div>
  );
}

export default App;
