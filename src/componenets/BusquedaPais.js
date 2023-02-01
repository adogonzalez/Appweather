import React from 'react'

const BusquedaPais = ({handleSumit}) => {
  return (
    <>
    <div className='container'> 
     <div className='row'>
     <form action='' onSubmit={handleSumit}>
       <input type='text'placeholder='Escribe tu Ciudad'/>
       <button>Buscar</button>
     </form> 
     </div>
     </div>
    </>
  )
}

export default BusquedaPais
