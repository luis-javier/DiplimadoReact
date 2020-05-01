import React from 'react'
import './Menu.css'

class Menu extends React.Component{
    render(){
        return(
            <div className="flex menu">
                <a href="#" class="menu__item">Inicio</a>

                <a href="#" class="menu__item">Temario</a>

                <a href="#" class="menu__item">Profesores</a>

                <a href="#" class="menu__item">Informacion</a>

                <a href="#" class="menu__item">Incripcion</a>

                <a href="#" class="menu__item">Contacto</a>
            </div>
        )
    }
}

export default Menu 