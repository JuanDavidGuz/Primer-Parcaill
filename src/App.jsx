import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  const [categories, setCategories] = useState(['2234  200000', '2345 20500'])

  const [text, setCategory] = useState( '' )
  const[valor, setvalor]= useState('')

  const addCategory = () => {
      setCategories( [...categories, [text,- valor]])
      setCategory('')
      setvalor('')
  }

  return (
    <>
    <h1>Bienvenido a su Gane</h1>
    <p>Ingrese el numero que va a juagar debe tener entre 3-4 diguitos:</p>
    <input value={text} type="number" onChange={ e => setCategory(e.target.value) } />
    <p>Ingrese el valor del chance:</p>
    <input value={valor} type="number" onChange={ e => setvalor(e.target.value) } />
    <br></br>
    <button onClick={() => addCategory()}>Añadir</button>

    <ol>
        {
            categories.map((category, key) => 
            {
                return <li key={key}> { category } </li>
            })
        }
    </ol>
</>
  )
}

export default App
