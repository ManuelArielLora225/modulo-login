import React, {useState} from 'react'
import { useFetchApi } from '../../api/apiUsuarios'
import Actualizar from '../login/Actualizar'
import axios from 'axios'
import '../hojas-estilos/styles.css'



const Info = ({correo, contrasena}) => {

 const [actualizar, setActualizar] = useState(false)
 const { data, error, loading } = useFetchApi('https://api-usuarios-1-49gv.onrender.com/api/usuarios')
 const [eliminado, setEliminado] = useState(false)


 console.log(data)

 if(!data) return null

 const usuarioEncontrado = data.find(user => user.correo === correo && user.contrasena === contrasena);



 const eliminar =  async () => {
   try {
    axios.delete(`https://api-usuarios-1-49gv.onrender.com/api/usuarios/${usuarioEncontrado.id}`)
   } catch(error){
    console.log('Error al eliminar la cuenta', error)
   }
   setEliminado(true)
 }



return (

    <div className='contenedor-principal'>
        
       {loading && 
        <h1 className='cargando'>Cargando...</h1>
       }

      {!loading && usuarioEncontrado && !actualizar && !eliminado && (
        <>
        <div key={usuarioEncontrado.id} className='contenedor-info'>
        <h1>Nombre Usuario:</h1>
        <h2>{usuarioEncontrado.nombre}</h2>
        <h1>Correo:</h1>
        <h3>{usuarioEncontrado.correo}</h3>
        <h1>Contraseña:</h1>
        <h3>{usuarioEncontrado.contrasena}</h3>
        <h1>Direccion:</h1>
        <h3>{usuarioEncontrado.direccion}</h3>
        <h1>Edad:</h1>
        <h3>{usuarioEncontrado.edad}</h3>  
        </div>

        <button className='boton-campo-actualizar' 
        onClick={() => {setActualizar(true)}}>Modificar Informacion de Cuenta</button>
     
        <button className='boton-eliminar'
        onClick={eliminar}>Eliminar Cuenta</button>
        </>
      )}

      {!loading && !usuarioEncontrado && !actualizar && (
        <h1 className='usuario-inexistente'>Este usuario no existe</h1>
      )}

       {error && 
        <h1>{error}</h1>
       }

       {actualizar && !eliminado && <Actualizar id={usuarioEncontrado.id} />}

       {eliminado && <h1 className='eliminado'>ELiminado exitosamebte</h1>}

    </div>
)


}

export default Info