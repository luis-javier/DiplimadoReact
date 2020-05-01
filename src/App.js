
import React, {Component} from 'react'
/*
import Menu from './components/Menu/'
import Header from './components/Header'
import Elemento from './components/Elemeto/'*/
import './index.css'
import Portada from './components/portada/'
import Footer from './components/Footer/'
import Letras from './components/Letras/'
import Hover from './components/Hover/'
import FormMaterial from './components/FormMaterial/'
import Cards from './components/Cards/'
import Car from './components/Car/'
import CarA from './components/CarA/'
import Collapse from './components/Collapse/'

class App extends Component{
  render(){
    return(
      <div>
        {/* <Header />
        <Menu />
        <Portada />
        <Elemento dir={0} icono={0} />
        <Elemento dir={1} icono={1} />
        <Letras />
        <Hover />
        <Footer /> */}

        <h1 class="ml11">
          <span class="text-wrapper">
            <span class="line line1"></span>
            <span class="letters">Formularios</span>
          </span>
        </h1>

        <FormMaterial />
      

        <h1 class="ml16">Carrusel</h1>
        <Car />
        <CarA />
        <h1 class="ml14">
          <span class="text-wrapper">
            <span class="letters">Hover Images</span>
            <span class="line"></span>
          </span>
        </h1>

        <Hover />
        <Collapse />
      </div>
    )
  }
}

export default App;
