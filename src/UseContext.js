import React, {  useState } from 'react';
import RecibeDato from './recibeDato'

export const userContext = React.createContext();

export function UseContextEjemplo() {

    const [user, setUser] = useState(null);
    const cambiaLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: "jean",
                edad:27
            })
        }
    }
    return (
        //solo aquellos componentes que esten envueltos por el
        //useContext.provider podran utilizar los datos .para saber el alcance de nuestros datos
        //en el componente useContext le pasaremos un valor , lo que quiere decir que cualqiuer componente
        //dentro de esa jerearquia podra usar el valor del usuario
        <userContext.Provider value={user}>
            <button onClick={cambiaLogin}>Cambia Login</button>
            <div>
                <RecibeDato />
            </div>
        </userContext.Provider>
        )
}