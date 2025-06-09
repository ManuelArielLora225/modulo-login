import React from 'react'
import { useFetchApi } from '../../api/apiUsuarios'

const Info = ({correo, contrasena}) => {

 const { data, error, loading } = useFetchApi('https://api-usuarios-1-49gv.onrender.com/api/usuarios')

 console.log(data)

 if(!data) return null

 const usuarioEncontrado = data.find(user => user.correo === correo && user.contrasena === contrasena);

return (
    <div className='contenedor-principal'>
        
       {loading && 
        <h1>Cargando...</h1>
       }

      {!loading && usuarioEncontrado && (
        <div key={usuarioEncontrado.id}>
        <h2>{usuarioEncontrado.nombre}</h2>
        <h3>{usuarioEncontrado.correo}</h3>
        <h3>{usuarioEncontrado.contrasena}</h3>
        <h3>{usuarioEncontrado.direccion}</h3>
        <h3>{usuarioEncontrado.edad}</h3>  
        </div>
      )}

      {!loading && !usuarioEncontrado && (
        <h1>Este usuario no existe</h1>
      )}

       {error && 
        <h1>{error}</h1>
       }

    </div>
)

}

export default Info