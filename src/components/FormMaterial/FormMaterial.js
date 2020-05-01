import React from 'react';
import clsx from 'clsx';
import {
  Typography,
  Grid,
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
  //modulos para el check
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  //modulos del radiogroup
  Radio,
  RadioGroup,
  FormLabel,
  //
  Input,
  //
  Button
} from '@material-ui/core/';
/*Modulos para el combo box*/

import './FormMaterial.css';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 290,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 290,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FormMaterial() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setAge(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="flex">
    <div className="form">
      
        <Typography variant="h3" gutterBottom>
          Material UI
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Nombre(s)" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required label="Apellidos" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">Password *
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={'password'}
              
            />
          </FormControl>

          </Grid>
          <Grid item xs={12} md={6}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Confirma Password *
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={'password'}
            />
          </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField required label="email" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
          
            <TextField
              id="date"
              label="Fecha de nacimiento"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          
          </Grid>

          <Grid item xs={12} md={6}>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Estado de la republica 
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>CDMX</MenuItem>
          <MenuItem value={20}>Edo. de Mexico</MenuItem>
          <MenuItem value={30}>Morelos</MenuItem>
          <MenuItem value={40}>Monterrey</MenuItem>
        </Select>
      </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Genero</FormLabel>
                <RadioGroup 
                  aria-label="Genero" 
                  name="gender1" 
                  value={value} 
                  onChange={handleChange}>
                <FormControlLabel 
                  value="Masculino" 
                  control={<Radio />} 
                  label="Femenino" />
                <FormControlLabel 
                  value="male" 
                  control={<Radio />} 
                  label="Masculino" />
                <FormControlLabel 
                  value="other" 
                  control={<Radio />} 
                  label="Otro" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes"/>}
              label="Al hacer click acepto los terminos y cond"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Registrar
            </Button>
          </Grid>
        </Grid>
      
    </div>
    <div className="form">
      
      
    </div>
       
    </div>
  );
}