import React, {useState} from 'react'

const Registrar = () => {

    const [correo, setCorreo] = useState(null)
    const [contrasena, setContrasena] =  useState(null)

    const registrarse = (e) => {
        e.preventDefault();
        const correo = e.target.correo.value
        const contrasena = e.target.password.value
        setCorreo(correo)
        setContrasena(contrasena)
        e.target.reset()
    }
  



    return(

        <div className='contenedor-registrar'>

            <h1 className='titulo'>Registrarse</h1>

            <div className='contenedor-forms'>

                <form onSubmit={registrarse}>
                    <label htmlFor='correo'>Correo:</label>
                    <input type='email' id='correo' name='correo' /><br />

                    <label htmlFor='password'>Contraseña:</label>
                    <input type='password' id='password' name='password' /><br />

                    <input type='submit' value='Registrarse' />
                </form>

            </div>

        </div>
    )
}

export default Registrar