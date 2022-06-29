import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/aggiuntaProdotto.css'

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
      autoComplete="off"
    >
     <div className='inner'>
      <div className='AggiuntaProdotto'>
      <button className="ButtonClose" onClick={()=>props.setTrigger(false) }>Chiudi aggiunta Prodotto</button>
      <TextField className='AggiuntaProdotto' id="Nome prodotto" label="Nome" variant="filled" />
      <TextField className='AggiuntaProdotto' id="Ricetta" label="Ricetta" variant="filled" />
      <TextField className='AggiuntaProdotto' id="Descrizione" label="Breve descrizione" variant="filled" />
      <TextField className='AggiuntaProdotto' id="Linkimmagine" label="Link immagine" variant="filled" /><p>Carica l' immagine tramite ftp nella cartella FotoProdotti</p>

        <TextField
          className='AggiuntaProdotto'
          id="Categoria"
          select
          label="Seleziona Categoria"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Seleziona la categoria"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      </div>
      
    </Box>
    </div>
  ):""
}

