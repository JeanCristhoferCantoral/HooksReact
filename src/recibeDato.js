//importamos el userContext el contexto que hemos generado en useContext
import { useContext } from 'react';
import { userContext } from './UseContext'
//ahora tenemos que recuperar la informacion lo unico que tenemos que hacer es generar un objeto y recuperar la informacion
//importamos usecontext y asignamos que contexto tendra
const RecibeDato = () => {
    const user = useContext(userContext)
    //de esta mnanera podemos acceder a propiedades creadas en otros componentes sin necesidad de hacer una cascada de `props
    return (
        <div>
            <h1>Recibe el dato</h1>
            {user && <p> Hola {user.name}</p> }
        </div>
        )
}
export default RecibeDato;
