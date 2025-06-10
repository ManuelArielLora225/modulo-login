import React, {useState} from 'react'
import axios from 'axios'

const Registrar = () => {

    const [registrado, setRegistrado] = useState(false)

    const registrarse = (e) => {
        e.preventDefault();
        const correo = e.target.correo.value
        const contrasena = e.target.password.value
        const nombre = e.target.nombre.value
        const direccion = e.target.direccion.value
        const telefono = e.target.telefono.value
        const edad = e.target.edad.value


        const datos = { correo, contrasena, nombre, direccion, telefono, edad}

        try {
            const respuesta = axios.post('https://api-usuarios-1-49gv.onrender.com/api/usuarios', datos )
            console.log('Respuesta del servidor:', respuesta.data)
            if(respuesta){ setRegistrado(true)}
        } catch (error){
            console.error('Error con el servidor', error)
        }
      
    }
  

    return(

        <div className='contenedor-registrar'>

            <h1 className='titulo'>Registrarse</h1>

            <div className='contenedor-forms'>

                <form onSubmit={registrarse}>

                    <label htmlFor='nombre'>Nombre:</label>
                    <input type='text' id='nombre' name='nombre' /><br />

                    <label htmlFor='correo'>Correo:</label>
                    <input type='email' id='correo' name='correo' /><br />

                    <label htmlFor='password'>Contraseña:</label>
                    <input type='password' id='password' name='password' /><br />

                    <label htmlFor='direccion'>Direccion:</label>
                    <input type='text' id='direccion' name='direccion' /><br />

                    <label htmlFor='telefono'>Telefono:</label>
                    <input type='text' id='telefono' name='telefono' /><br />
      
                    <label htmlFor='edad'>Edad:</label>
                    <input type='number' id='edad' name='edad' /><br />


                    <input type='submit' value='Registrarse' />
                </form>

            </div>

            {registrado && <h1>{`Usuario correctamente registrado`}</h1>}

        </div>
    )
}

export default Registrar