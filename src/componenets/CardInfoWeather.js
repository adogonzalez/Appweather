import React from 'react'
import TextoCambio  from './TextoCambio'
import TextoViento from './TextoViento'

const CardInfoWeather = ({data}) => {
   const [icon,setIcon] = ("") 
    console.log(data)
   /* let image = data.temp <= 0 ? 'muy_frio.jpg':
    data.temp >= 1 && data.temp <= 15 ? 'frio.jfif':
    data.temp >= 16 && data.temp <= 25 ? 'templado.jfif':
data.temp > 25 ? 'caliente.jpeg' : '' */

 let iconos = data.temp >= 26 ? 'clear-day.svg':
              data.temp >= 10 && data.temp <= 25 ? 'clear-day.svg': 
              data.temp >= 1 && data.temp <= 9 ? 'cloudy.savg':
              data.temp <=  -16  ? 'snowflake.svg' :
              data.temp <= 0 &&  data.temp  >= -15 ? 'snow.svg': ''
 let   logowind = data.velocidad_viento >= 0 ? 'wind.svg':'' 
 let logoNube = data.tipo_cielo = 'few clouds' ? 'cloudy.svg' :''
 let logoHumedad = data.humedad > 1 ? 'humidity.svg' :''

 const obtenerClima = data.temp;
 const datoViento  = data.velocidad_viento;
 let noEncontrado = data.hayError;
 

  if(noEncontrado == '404'){
   return (
      <h1>{'hay error en la busqueda'}</h1>
     )
  } else { 
   return (
    <>
     {/* <h1>Pais:{data.country}</h1>
      <h1>Ciudad:{data.city}</h1>
      <h1>Temp:{data.temp}&deg;</h1>
      <img src={`../imagen/${image}`} alt=' ' /> 
      <h1>Temp_max:{data.temp_max}&deg;</h1>
      <h1>Temp_min:{data.temp_min}&deg;</h1>
      <h1>Vel_viento MPH:{data.velocidad_viento}</h1>
      <h1>Cielo:{data.tipo_cielo}</h1> */}

     <div className='container-fluid'>
   

      {/* <div className='card'>
         {(data) ? (
          <div className='card-container'>
          <h1 className='country-name'>Pais: {data.country}</h1>
           <h1 className='city-name'>Ciudad: {data.city}</h1>
            <p className='temp'> Temperatura: {data.temp}&deg;</p> 
            <p className='viento'>Vel_viento MPH: {data.velocidad_viento}</p>
            <img className='clima-img' src={`../icons/${iconos}`} alt=' ' /> 
           <img src={`../icons/${logowind}`} alt=' ' /> 
         *<img className='icon'src={Icons(icon)} alt='icon-weather'/> 
            <div className='card-footer'>
            <p className='temp-max-min'> Tem_min: {data.temp_min}&deg; | Temp_max: {data.temp_max}&deg;</p>
             
           </div>
           </div>
         ) : (
          <h1>{'Ciudad no encontrada'}</h1>
         )}
      </div> */}
      <div className='row'>
         {(data) ? (
        <div className='col-2'>
        <h3 className='card-title'>Condición </h3>
        <p className='temp'> Temperatura: {data.temp}&deg;</p> 
        <TextoCambio temperatura = {obtenerClima}/>
        <img className='card-img-top' src={`../icons/${iconos}`} alt=' ' /> 
        <p className='temp-max-min'> min: {data.temp_min}&deg; | max: {data.temp_max}&deg;</p>
        </div>
        ) : (
          <h1>{'Ciudad no encontrada'}</h1>
      )}
      {(data) ? (
        <div className='col-2'>
        <h3 className='card-title'>Viento </h3>
        <p className='temp'> Velocidad del Viento MPH: {data.velocidad_viento}</p> 
       
        <img className='card-img-top' src={`../icons/${logowind}`} alt=' ' /> 
        {/* <p  className='temp-max-min'> velocidad adecuada</p> */}
        <TextoViento mensajeViento = {datoViento}/>
        </div>
        ) : (
          <h1>{'Ciudad no encontrada'}</h1>
      )}
      {(data) ? (
        <div className='col-2'>
        <h3 className='card-title'> Condiciones del cielo</h3>
        <p className='temp'> Condiciones del cielo: {data.velocidad_viento}</p> 
       
        <img className='card-img-top' src={`../icons/${logoNube}`} alt=' ' /> 
        {/* <p  className='temp-max-min'> velocidad adecuada</p> */}
        <TextoViento mensajeViento = {logoNube}/>
        </div>
        ) : (
          <h1>{'Ciudad no encontrada'}</h1>
      )}
      {(data) ? (
        <div className='col-2'>
        <h3 className='card-title'> Humedad</h3>
        <p className='temp'> Porcentaje de humedad: {data.humedad}% </p> 
       
        <img className='card-img-top' src={`../icons/${logoHumedad}`}  alt=' ' /> 
        {/* <p  className='temp-max-min'> velocidad adecuada</p> */}
        <TextoViento mensajeViento = {logoNube}/>
        </div>
        ) : (
          <h1>{'Ciudad no encontrada'}</h1>
      )}
      </div>
    </div>
    </>
  )
}
}

export default CardInfoWeather
