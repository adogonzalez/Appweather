import { useEffect , useState } from 'react';

import getApiInfo from './helpers/getApiInfo';
import CardInfoWeather from './componenets/CardInfoWeather';
import BusquedaPais from './componenets/BusquedaPais';
import './App.css';

function App() {
  
  const [data, setdata] = useState({
    country:'',
    city:'',
    temp:'',
    temp_max:'',
    temp_min:'',
    velocidad_viento:'',
    tipo_cielo:'',
    humedad:'',
    hayError:''
  });

  
 
   const [city,setCity] = useState('')

  useEffect(()=>{
    getApiInfo(city).then(data =>{
     console.log(data)

      setdata( prevState => ({
        ...prevState,
        country:data.sys.country,
        city:data.name,
        temp:Math.round(data.main.temp),
        temp_max:Math.round(data.main.temp_max),
        temp_min:Math.round(data.main.temp_min),
        velocidad_viento:data.wind.speed,
        tipo_cielo:data.weather[0].description,
        humedad:data.main.humidity,
        hayError:data.cod
      }));

    }); 
  }, [city]);
  const handleSumit = (e) =>{
     e.preventDefault()
    setCity(e.target[0].value);
    console.log(e.target[0].value)
    e.target.reset()
    
  }
  return (
   <>
     <div className="container">
     <h2>App Weather</h2>
    </div>
    <BusquedaPais handleSumit={handleSumit}/>
    <CardInfoWeather data={data}/>
   </>
  );
}

export default App;
