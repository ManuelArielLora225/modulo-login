import React, {useState} from 'react'
import Info from '../info/Info'
import '../hojas-estilos/styles.css'


const Iniciar = () => {

    const [correo, setCorreo] = useState(null)
    const [contrasena, setContrasena] =  useState(null)
    const [secionInicada, setSecionIniciada] = useState(false)

    const iniciar = (e) => {
        e.preventDefault();
        const correo = e.target.correo.value
        const contrasena = e.target.password.value
        setCorreo(correo)
        setContrasena(contrasena)
        setSecionIniciada(true)
    }



    return(
        <>
        {!secionInicada && 
            <div className='contenedor-iniciar'>

            <h1 className='titulo'>Inicia Sesión</h1>

            <div className='contenedor-forms'>

                <form onSubmit={iniciar}>
                    <label htmlFor='correo'>Correo:</label>
                    <input type='email' id='correo' name='correo' /><br />

                    <label htmlFor='password'>Contraseña:</label>
                    <input type='password' id='password' name='password' /><br />

                    <input type='submit' value='Iniciar Sesión' />
                </form>

            </div>


        </div>
         }

         {secionInicada && 
            <div className='contenedor-iniciar'>
                {correo && contrasena && (
            <div>
                <Info correo={correo} contrasena={contrasena}/>
            </div>
         )}
            </div>
         }

        </>
    )
}

export default Iniciar 