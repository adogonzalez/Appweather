import React from "react"

export default function TextoViento({mensajeViento}) {

    return (
          <div>{mensajeViento < 5 ? <p className='temp-max-min'> vientos fuertes</p> : <p className='temp-max-min'>vientos moderados</p> } </div>
    )
    }