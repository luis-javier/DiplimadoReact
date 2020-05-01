import React from 'react'
import {Grid} from '@material-ui/core/'
import './Cards.css'
import Ejemplo from '../img/example-image.jpg'

class Hover extends React.Component{
  render(){

    return(
      <div className="flex algo">
        <Grid container spacing={2}>
            
          <Grid item xs={12} md={6}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eum dignissimos hic minus quisquam laudantium quo, ducimus, explicabo repudiandae quae eos mollitia laborum voluptates aliquid repellendus doloribus quasi. Soluta, similique.
          </Grid>
          
          <Grid item xs={12} md={6}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, culpa dolorum. Illum reprehenderit officiis aliquid mollitia laboriosam ad voluptatum provident dicta nostrum atque, hic nulla soluta incidunt ipsa, minima ducimus.
          </Grid>

        </Grid>
        
      </div>
    )
  }
}

export default Hover