import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../styles/aggiuntaProdotto.css'
// import {DropzoneArea} from 'material-ui-dropzone'

const currencies = [
  {
    value: 'Panini',
    label: 'Panini',
  },
  {
    value: 'Bibite',
    label: 'Bibite',
  },
  {
    value: 'Pizze',
    label: 'Pizze',
  },
  {
    value: 'Menu',
    label: 'Menu',
  },
];

export default function AddProduct(props) {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (props.trigger) ?(
    <div className='popup'>
    <Box
        
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
     <div className='inner'>
<<<<<<< HEAD
      <div className='AggiuntaProdotto'>
     
      <TextField className='AggiuntaProdotto' id="Nome prodotto" label="Nome" variant="filled" />
      <TextField className='AggiuntaProdotto' id="Ricetta" label="Ricetta" variant="filled" />
      <TextField className='AggiuntaProdotto' id="Descrizione" label="Breve descrizione" variant="filled" />
      <TextField className='AggiuntaProdotto' id="Linkimmagine" label="Link immagine" variant="filled" /><p>Carica l' immagine tramite ftp nella cartella FotoProdotti</p>
=======
      <div className='AggiuntaProdottocontainer'>
      <button className="ButtonClose" onClick={()=>props.setTrigger(false) }>Chiudi aggiunta Prodotto</button>
      <TextField className='AggiuntaProdotto' id="Nome prodotto" label="Nome" variant="outlined" />
      <TextField className='AggiuntaProdotto' id="Ricetta" label="Ricetta" variant="outlined" />
      <TextField className='AggiuntaProdotto' id="Descrizione" label="Breve descrizione" variant="outlined" />
      <DropzoneArea> </DropzoneArea>
>>>>>>> 0b3c5053d7c14c3171c689fbe2ed2b7c799f65f8

        <TextField
          className='AggiuntaProdottoCategoria'
          id="Categoria"
          select
          label="Seleziona Categoria"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Seleziona la categoria"
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <button className="button button2" onClick={()=>props.setTrigger(false) }>Chiudi aggiunta Prodotto</button>
      </div>
      
    </Box>
    </div>
  ):""
}

