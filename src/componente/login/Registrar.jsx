import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../hojas-estilos/styles.css'

const Registrar = () => {

    const [registrado, setRegistrado] = useState(false)
    const [cargando, setCargando] = useState(false)
    const [error, setError] =  useState(false)

    const registrarse = async (e) => {
        e.preventDefault();
        const correo = e.target.correo.value
        const contrasena = e.target.password.value
        const nombre = e.target.nombre.value
        const direccion = e.target.direccion.value
        const telefono = e.target.telefono.value
        const edad = e.target.edad.value


        const datos = { correo, contrasena, nombre, direccion, telefono, edad}

        try {
            const respuesta = await axios.post('https://api-usuarios-1-49gv.onrender.com/api/usuarios', datos )
            console.log('Respuesta del servidor:', respuesta.data)
            
        if(!respuesta){
            setCargando(true)
        } else {
            setCargando(false)
            setRegistrado(true)
        }
            
        } catch (error){
            console.error('Error con el servidor', error)
            setError(true)
        }


        
      
    }
  

    return(


        <div className='contenedor-registrar'>

         {!registrado && !cargando && !error &&
         <>
          <h1 className='titulo'>Registrarse</h1>

            <div className='contenedor-forms'>

                <form onSubmit={registrarse}>

                    <label htmlFor='nombre'>Nombre: <span className='required'>*</span></label>
                    <input type='text' id='nombre' name='nombre' required /><br />

                    <label htmlFor='correo'>Correo: <span className='required'>*</span></label>
                    <input type='email' id='correo' name='correo'  required/><br />

                    <label htmlFor='password'>Contraseña: <span className='required'>*</span></label>
                    <input type='password' id='password' name='password'  placeholder='minimo 6 caracteres'  required/><br />

                    <label htmlFor='direccion'>Direccion: <span className='required'>*</span></label>
                    <input type='text' id='direccion' name='direccion'  required/><br />

                    <label htmlFor='telefono'>Telefono: <span className='required'>*</span></label>
                    <input type='text' id='telefono' name='telefono' required /><br />
      
                    <label htmlFor='edad'>Edad: <span className='required'>*</span></label>
                    <input type='number' id='edad' name='edad'  required/><br />


                    <input type='submit' value='Registrarse' />
                </form>

            </div>
            </>
        }

            {registrado && !cargando && !error &&<h1 className='registrado'>Usuario correctamente registrado</h1>}
            {cargando && <h1 className='cargando'>Cargando...</h1>}
            {error && <h1 className='error'>Servidor no pudo procesar la solicitud</h1>}

        </div>
    )
}

export default Registrar