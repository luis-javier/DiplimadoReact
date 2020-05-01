import React from 'react'
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="flex letras footer-ingenieria">
                <div className="flex footer-ingeneieria__fac">
                    Facultad de 
                    <span>Ingeniería</span>
                </div>

                <div className="footer-ingeneieria__contacto">
                    Universidad Nacional Autónoma de México
                    Facultad de Ingeniería, Av. Universidad 3000, Ciudad Universitaria, Coyoacán, Cd. Mx., CP 04510 
                    <p>
                        Teléfono: 56 22 08 66 
                        <br/>
                        Fax: 56 16 28 90 <br/>
                    eMail: fainge@unam.mx       <br/>
                    </p>
                </div>
                <div className="flex footer-ingeneieria__redes-sociales">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>

        </div>
            </div>

        )
    }
}

export default Footer 