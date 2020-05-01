import React from 'react'
import './Portada.css'
import iconoVector from '../img/Sin titulo-1.svg'
import Img from '../img/imagen.png'

class Portada extends React.Component{
    render(){
        return(
            <div className="portada">
                <div className="flex portada-diplomado">
                    <div className="flex letras portada-diplomado__titulo">
                        DIPLOMADO
                        <span className="portada-diplomado__titulo-diplomado">
                            ADMINISTRACION, CLUESTERIZACIÓN Y 
                            <br/>
                            ANALITICA DE BASES DE DATOS
                        </span>
                    </div>
                
                    <div className="flex portada-diplomado__icono">
                    <img id="holi" src={iconoVector}/>
                </div>

                </div>

                <img className="parallax-window" data-parallax="scroll" src={Img}/>
            </div>
        )
    }
}

export default Portada