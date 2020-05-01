import React from 'react'
import './Header.css'
import UNAM from '../img/UNAM_blanco-1.png'
import FI from '../img/Logo _INGENIERIA_Blanco.svg'

class Portada extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="flex encabezado">
                    <div className="flex letras encabezado__unam">
                        <img className="encabezado__escudo-unam" src={UNAM}/>
                        Universidad Nacional <br/>
                        Autonoma de México
                    </div>

                    <div className="flex letras encabezado__fi">
                        <img className='encabezado__escudo-fi' src={FI} alt=""/>
                        <div className="flex encabezado__letras-fi">
                            Facultad de Ingeniería
                            <span className="encabezado__letras-division">División de Ingeniería Eléctrica</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portada