import react, {useState} from 'react'
import axios from 'axios';
import Info from '../info/Info';
import '../hojas-estilos/styles.css'

const Actualizar = ({id}) => {

    const [correo, setCorreo] = useState(null)
    const [contrasena, setContrasena] = useState(null)
    const [respuesta, setRespuesta] = useState(false)
    const [error, setError] = useState(false)
     
    
    const modificar = async (e) => {
        e.preventDefault();
        const correo = e.target.correo.value
        const contrasena = e.target.password.value
        const nombre = e.target.nombre.value
        const direccion = e.target.direccion.value
        const telefono = e.target.telefono.value
        const edad = e.target.edad.value
        
        setCorreo(correo)
        setContrasena(contrasena)

        const datos = { correo, contrasena, nombre, direccion, telefono, edad}

        try {
            const respuesta = await axios.patch(`https://api-usuarios-1-49gv.onrender.com/api/usuarios/${id}`, datos )
            console.log('Respuesta del servidor:', respuesta.data)
            console.log(respuesta)
        } catch (error){
            console.error('Error con el servidor', error)
            setError(true)
        }

       setRespuesta(true)
    }
  

    return (

        <>

        {!respuesta && 
  
         <>
        <h1 className='titulo'>Actualizar</h1>

            <div className='contenedor-forms'>

                <form onSubmit={modificar}>

                    <label htmlFor='nombre'>Nombre: <span className='required'>*</span></label>
                    <input type='text' id='nombre' name='nombre' required /><br />

                    <label htmlFor='correo'>Correo: <span className='required'>*</span></label>
                    <input type='email' id='correo' name='correo' required /><br />

                    <label htmlFor='password'>Contraseña: <span className='required'>*</span></label>
                    <input type='password' id='password' name='password' placeholder='minimo 6 caracteres'  required/><br />

                    <label htmlFor='direccion'>Direccion: <span className='required'>*</span></label>
                    <input type='text' id='direccion' name='direccion'  required/><br />

                    <label htmlFor='telefono'>Telefono: <span className='required'>*</span></label>
                    <input type='text' id='telefono' name='telefono'  required/><br />
      
                    <label htmlFor='edad'>Edad: <span className='required'>*</span></label>
                    <input type='number' id='edad' name='edad'  required/><br />


                    <input type='submit' value='Modificar Informacion de Usuario' />
                </form>

            </div>
            </>

        }
        
        {respuesta && !error && <h1 className='Actualizado'>Usuario Actualizado correctamente</h1>}
        {respuesta && error && <h1 className='datos-invalidos'>Datos Invalidos, inicia sesion y actualiza nuevamente</h1>}

        </>
        
        
    )
}

export default Actualizar