import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
    const [Total,setTotal]= useState(0)
  
  const [categories, setCategories] = useState([])

  const [text, setCategory] = useState( '' )
  const[valor, setvalor]= useState('')

  const addCategory = () => {
    if(text.length >= 3 && valor != '' ){
        setCategories( [...categories, ["Numero: " + text, " - "+"Valor:  "+ valor]])
        setCategory('')
        setvalor('')
        setTotal(Total+parseInt(valor))
    }else{
        alert('Ingrese un Numero de 3 o 4 Digutos')
    }
  }
  function LimiteMax(event) {
    const maximo = 4;
    if (event.target.value.length >= maximo && event.key !== 'Backspace') {
      event.preventDefault();
    }


}
 


  return (
    <>
    <h1 class="t">Bienvenido a su Gane</h1>
    <p>Ingrese el numero que va a juagar debe tener entre 3-4 diguitos:</p>
    <input value={text} type="number" onKeyDown={LimiteMax} onChange={ e => setCategory(e.target.value) } />
    <p>Ingrese el valor del chance:</p>
    <input value={valor} type="number" onChange={ e => setvalor(e.target.value) } />
    <br></br>
    <br></br>
    <button onClick={() => addCategory()} class="ov-btn-slide-right" >Añadir</button>

    <ol>
        {
            categories.map((category, key) => 
            {
                return <li key={key}> { category } </li>
            })
        }
    </ol>

    <h2>Total a pagar:{Total} </h2>
</>
  )
}

export default App
