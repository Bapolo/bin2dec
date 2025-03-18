import { useContext, useState } from 'react'
import { contexto } from './Contexto'
import '../App'

function Provedor({children})
{
    const [theme,setTheme] = useState("light")

    return (
        <contexto.Provider value = {{ theme, setTheme }} >
            {children}
        </contexto.Provider>
    )
}

export default Provedor