import { useState } from "react";
function Form({onAddCar}){

  const [marca,setMarca]=useState("");
  const [placa,setPlaca]=useState("");
  const [modelo,setModelo]=useState("");
  const [datosInvalidos,setDatosInvalidos]=useState("");
  const [enviar, setEnviar] = useState(false);


  const onChangeMarca = (event) => {
    setMarca(event.target.value)
  }

  const onChangePlaca = (event) => {
    setPlaca(event.target.value)
  }

  const onChangeModelo = (event) => {
    setModelo(event.target.value)
  }

  const conditionsInputs = (marca) => {
    if(marca.length >= 3 && marca[0] !== " " && placa.length >= 6){
      return true
    } else {
      setDatosInvalidos("Por favor revisa que la información ingresada sea correcta")
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosValidos = conditionsInputs(marca)

    if(datosValidos)[
      setEnviar(true),
      setDatosInvalidos(''),
      onAddCar({marca,placa,modelo})
    ]
}

return (

  <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ingrese la marca" value={marca} onChange={onChangeMarca} />
      <input type="text" placeholder="Ingrese la placa" value={placa} onChange={onChangePlaca} />
      <input type="number" placeholder="Ingrese el modelo" value={modelo} onChange={onChangeModelo} />
      <button type="submit">Enviar Datos</button>
      <div> {datosInvalidos}</div>
  </form>

    )

}
  
export default Form;