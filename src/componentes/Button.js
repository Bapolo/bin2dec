import { useContext } from 'react'
import { contexto } from './Contexto'

function Button()
{
    const { theme,setTheme } = useContext(contexto)

    return (
        <button style = {{cursor: "pointer", padding: "0.5rem"}} onClick = {() => setTheme(theme === 'light' ? 'dark' : 'light')} >
            alterar para {theme === 'light' ? 'dark' : 'light'}
        </button>
    )
}

export default Button