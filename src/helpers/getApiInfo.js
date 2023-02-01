
const API_KEY ='f627cd80eba436559d3f7ecf907c5d67';

const getApiInfo = async (city) =>{
   
   const data = await ( await fetch(`
   https://api.openweathermap.org/data/2.5/weather?q=${ city || 'madrid'}&appid=${API_KEY}&units=metric`)).json()
   return data
   
   
}
export default getApiInfo