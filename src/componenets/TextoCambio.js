
import React from 'react'

export default function TextoCambio({temperatura}) {
  console.log(temperatura)
   return (
     <div>{temperatura > 10 ? <p className='card-text'>no hay nieve ,puedes caminar y disfrutar del clima</p> : <p className='card-text'>la temperatura es muy baja,lleva ropa adecuada</p>}</div>
  )

   }


 


