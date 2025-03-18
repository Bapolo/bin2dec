import '../App.css';
import { FaRegMeh } from "react-icons/fa";
import { useState,useEffect } from 'react'

function Conversor()
{
    const [input,setInput] = useState("")
  const [erro,setErro] = useState(false)
  const [mensagemDeErro,setMensagemDeErro] = useState("Um número binario inclui apenas 0s e 1s")
  const [decimal,setDecimal] = useState("")

  useEffect(() =>
  {
    setDecimal(conversaoBinarioParaDecimal())
  },[input])

  function definirEntrada( event )
  {
    let numero = event.target.value

    if (numero === "")
    {
      setInput("")
      return
    }

    let inputAtual = parseInt(numero)
    let numeroDeAlgarismos = numero.toString().length

    for (let contador = 0; contador < numeroDeAlgarismos; contador++)
    {    
      let ultimoNumero = inputAtual % 10

      if ((numeroDeAlgarismos === 1 && (ultimoNumero !== 0 && ultimoNumero !== 1)) || (ultimoNumero !== 0 && ultimoNumero !== 1))
      {
        setErro(true)
        return
      }
      
      setErro(false)
      inputAtual = parseInt(inputAtual / 10)
    }

    setInput(numero.replace(/[^01]/g, ""))

  }

  conversaoBinarioParaDecimal()

  function conversaoBinarioParaDecimal()
  {
    let binario = parseInt(input)
    let decimal = 0
    let numeroAtual = binario % 10
    
    for (let contador = 0; contador < input.length; contador++)
    {
      decimal += numeroAtual * 2**contador
      binario = parseInt(binario / 10)
      numeroAtual = binario % 10
    }

    return decimal    
  }

  return(
    <div className = 'App container'>
      <h2>Conversor Binario para Decimal</h2>
      <h1>{decimal}</h1>
      {erro && <p style = {{color: "red", display: "flex", justifyContent: "center", gap: "5px"}}>{mensagemDeErro} <FaRegMeh /></p>}
      <input 
      type = "number" 
      value = {input} 
      onChange = { definirEntrada }
      placeholder='Digite um binario'
      />
    </div>
  )  
}

export default Conversor