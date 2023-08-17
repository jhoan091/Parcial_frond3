import { useState } from 'react'
import './App.css'
import Form from './Form';
import Vehiculo from './Card';


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [autos,setAuto]=useState([]);

  const addCar = (Car) => {
    setAuto([...autos,Car]);
  };

  return (
    <div className="App">
      <h1>Cual es tu auto</h1>
      <Form onAddCar={addCar}/>
      <Vehiculo autos={autos}/>
    </div>
  );
}


export default App

