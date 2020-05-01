import React from 'react'
import './Elemento.css'
import Icono1 from '../img/undraw_server_down_s4lk.svg'
import Icono2 from '../img/undraw_online_organizer_ofxm.svg'

class Elemento extends React.Component{
    render(){

        var arr = [Icono1,Icono2]

        const detDir = this.props.dir==1? ' der':''

        const dir = 'flex presentacion__izq' + detDir
 
        const mar = this.props.dir == 1?'margin-extra':''

        return(
            <div className="presentacion">
                <div className={dir} data-aos="fade-up" 
                data-aos-anchor-placement="center-bottom" 
                data-aos-duration="800"
                data-aos-delay="200"
                >
                    <div>
                    <img className="presentacion__conexion" src={arr[this.props.icono]} />
                    </div>
                

                <span className={mar}>
                    <h2>¿Porque tomar este diplomado?</h2>

                    <p>
                        Los datos representan a uno de los activos más importantes dentro de las  empresas u organizaciones y ésta se encuentra en su mayoría administrada por sistemas de bases de datos. Estos sistemas hacen uso de la información contenida en las bases de datos para apoyar el proceso de toma de decisiones o para lograr ventajas competitivas.  
                    </p>
                </span>
                </div>
            </div>
        )
    }
}

export default Elemento 