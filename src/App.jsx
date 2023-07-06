import './App.css'
import Pies from './components/PiesChart'
import BarsComponent from './components/BarsChart'
import LinesChart from './components/LinesChart'
import { api } from './data/mercaderia'
import { useState } from 'react'

var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function App() {

  const idInventario = 60;
  const [dato, setDato] = useState(api);
  
  const [apiEntrada, setApiEntrada] = useState([]);
  const [apiSalida, setApiSalida] = useState([]);

  const handleClickEntrada = () => {
    const filtradoDato = dato.filter(elem => elem.idinventario == idInventario);
    const filtradoEntrada = filtradoDato.filter(elem => elem.categoria == "Entrada");
    console.log("API ENTRADA",filtradoEntrada);

    const enviar = [];

    let enero = 0;
    let febrero = 0;
    let marzo = 0;
    let abril = 0;
    let mayo = 0;
    let junio = 0;
    let julio = 0;
    let agosto = 0;
    let septiembre = 0;
    let octubre = 0;
    let noviembre = 0;
    let diciembre = 0;

    for (let i = 0; i < filtradoEntrada.length; i++) {
      const element = filtradoEntrada[i];
      const dateFecha = new Date(element.fecha);

      if ( dateFecha.getMonth() == 0 ) {
        enero += element.stock;
      }
      if ( dateFecha.getMonth() == 1 ) {
        febrero += element.stock;
      }
      if ( dateFecha.getMonth() == 2 ) {
        marzo += element.stock;
      }
      if ( dateFecha.getMonth() == 3 ) {
        abril += element.stock;
      }
      if ( dateFecha.getMonth() == 4 ) {
        mayo += element.stock;
      }
      if ( dateFecha.getMonth() == 5 ) {
        junio += element.stock;
      }
      if ( dateFecha.getMonth() == 6 ) {
        julio += element.stock;
      }
      if ( dateFecha.getMonth() == 7 ) {
        agosto += element.stock;
      }
      if ( dateFecha.getMonth() == 8 ) {
        septiembre += element.stock;
      }
      if ( dateFecha.getMonth() == 9 ) {
        octubre += element.stock;
      }
      if ( dateFecha.getMonth() == 10 ) {
        noviembre += element.stock;
      }
      if ( dateFecha.getMonth() == 11 ) {
        diciembre += element.stock;
      }
    }
    enviar.push(enero);
    enviar.push(febrero);
    enviar.push(marzo);
    enviar.push(abril);
    enviar.push(mayo);
    enviar.push(junio);
    enviar.push(julio);
    enviar.push(agosto);
    enviar.push(septiembre);
    enviar.push(octubre);
    enviar.push(noviembre);
    enviar.push(diciembre);

    console.log(enviar);
    setApiEntrada(enviar);
  }
  const handleClickSalida = () => {
    const filtradoDato = dato.filter(elem => elem.idinventario == idInventario);
    const filtradoSalida = filtradoDato.filter(elem => elem.categoria == "Salida");
    console.log("API SALIDA",filtradoSalida);

    const enviar = [];

    let enero = 0;
    let febrero = 0;
    let marzo = 0;
    let abril = 0;
    let mayo = 0;
    let junio = 0;
    let julio = 0;
    let agosto = 0;
    let septiembre = 0;
    let octubre = 0;
    let noviembre = 0;
    let diciembre = 0;

    for (let i = 0; i < filtradoSalida.length; i++) {
      const element = filtradoSalida[i];
      const dateFecha = new Date(element.fecha);

      if ( dateFecha.getMonth() == 0 ) {
        enero += element.stock;
      }
      if ( dateFecha.getMonth() == 1 ) {
        febrero += element.stock;
      }
      if ( dateFecha.getMonth() == 2 ) {
        marzo += element.stock;
      }
      if ( dateFecha.getMonth() == 3 ) {
        abril += element.stock;
      }
      if ( dateFecha.getMonth() == 4 ) {
        mayo += element.stock;
      }
      if ( dateFecha.getMonth() == 5 ) {
        junio += element.stock;
      }
      if ( dateFecha.getMonth() == 6 ) {
        julio += element.stock;
      }
      if ( dateFecha.getMonth() == 7 ) {
        agosto += element.stock;
      }
      if ( dateFecha.getMonth() == 8 ) {
        septiembre += element.stock;
      }
      if ( dateFecha.getMonth() == 9 ) {
        octubre += element.stock;
      }
      if ( dateFecha.getMonth() == 10 ) {
        noviembre += element.stock;
      }
      if ( dateFecha.getMonth() == 11 ) {
        diciembre += element.stock;
      }
    }
    enviar.push(enero);
    enviar.push(febrero);
    enviar.push(marzo);
    enviar.push(abril);
    enviar.push(mayo);
    enviar.push(junio);
    enviar.push(julio);
    enviar.push(agosto);
    enviar.push(septiembre);
    enviar.push(octubre);
    enviar.push(noviembre);
    enviar.push(diciembre);

    console.log(enviar);
    setApiSalida(enviar);
  } 

  var midata = {
    labels: meses,
    datasets: [
      {
        label: "Entrada",
        data: apiEntrada,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Salida",
        data: apiSalida,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(10, 99, 132)",
        backgroundColor: "rgba(50, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(10, 255, 132)",
        pointBackgroundColor: "rgba(90, 99, 255)",
      },
    ],
  };

  return (
    <>
      <h1>HOLA MUNDO</h1>
      <button onClick={handleClickEntrada}>Entrada</button>
      <button onClick={handleClickSalida}>Salida</button>
      <LinesChart data={midata}/>
    </>
  )
}

export default App
