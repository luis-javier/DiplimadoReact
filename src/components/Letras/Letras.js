import React from 'react'
import './Letras.css'

class Letras extends React.Component{
  render(){

    return(
      <div className="algo">
        <h1 className="ml1">
        <span className="text-wrapper">
            <span className="line line1"></span>
            <span className="letters">¿Porque tomar este Diplomado?</span> 
            <span className="line line2"></span>
          </span>
        </h1>
      </div>
    )
  }
}

export default Letras