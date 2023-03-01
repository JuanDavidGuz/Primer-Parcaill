const inicio = ({value}) =>{
    const añadir = () => {
        console.log('SE LLAMO')
 
    }
    return(
        <>
        <h1>EL GANE</h1>
        <span>Le damos la bienvenida a el gane por favor ingrese el numero a jugar y el valor a apostar</span>
        <input type={Number} className = "NumeroGane"></input>
        <input type={Number} className = "Dinero"></input>
        


        </>
    )
}