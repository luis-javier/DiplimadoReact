import React from 'react'
import {Grid} from '@material-ui/core/'
import './Hover.css'
import Ejemplo from '../img/example-image.jpg' 


class Hover extends React.Component{
  render(){

    return(
      <div className="flex algo">
        <Grid container spacing={2}>
            
          <Grid item xs={12} md={6}>
            <div className="flex comp">
              <div>
                <h2>Hover CSS</h2>
              </div>
            <figure className="imghvr-slide-up">
              <img src={Ejemplo}/>
              <figcaption>
              <h3>Oscar Wilde</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae explicabo minima 
              </figcaption>
            </figure>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="flex comp">
              <div>
                <h2>Izmir</h2>
              </div>
            <figure className="c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right img-izm" tabindex="0">
              <img src={Ejemplo}/>
              <figcaption className="c4-layout-bottom-left">
                <div className="c4-reveal-right c4-delay-100">
                <h3>Oscar Wilde</h3>
                  <br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae explicabo minima  
                </div> 
              </figcaption>
            </figure>
            </div>
          </Grid>

        </Grid>
        
      </div>
    )
  }
}

export default Hover