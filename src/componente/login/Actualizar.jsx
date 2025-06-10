import react, {useState} from 'react'
import axios from 'axios';
import Info from '../info/Info';
import '../hojas-estilos/styles.css'

const Actualizar = ({id}) => {

    const [correo, setCorreo] = useState(null)
    const [contrasena, setContrasena] = useState(null)
    const [respuesta, setRespuesta] = useState(false)
     
    
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
            const respuesta = await axios.put(`https://api-usuarios-1-49gv.onrender.com/api/usuarios/${id}`, datos )
            console.log('Respuesta del servidor:', respuesta.data)
        } catch (error){
            console.error('Error con el servidor', error)
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


                    <input type='submit' value='Modificar Informacion de Usuario' />
                </form>

            </div>
            </>

        }
        
        {respuesta && <Info correo={correo} contrasena={contrasena} />}

        </>
        
        
    )
}

export default Actualizar