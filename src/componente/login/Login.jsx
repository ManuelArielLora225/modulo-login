import React, { useState } from 'react'
import Iniciar from './Iniciar'
import Registrar from './Registrar'
import '../hojas-estilos/styles.css'




const Login = () => {
    const [logeado, setLogeado] = useState(false)

    return(

    <div className='conenedor-general-login'>
    


        <div className='botones-logearse'>

           <button className='boton-iniciar'
            onClick={() => {setLogeado(true)}}>Iniciar Sesion</button>

            <button className='boton-registrar'
            onClick={() => {setLogeado(false)}}>Registrarse</button>

        </div>

        {logeado ? <Iniciar/> : <Registrar/>}
      

    </div>

    )

}

export default Login