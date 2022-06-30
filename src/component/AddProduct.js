import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../styles/aggiuntaProdotto.css'

const currencies = [
  {
    value: 'panino',
    label: 'Panini',
  },
  {
    value: 'bibita',
    label: 'Bibite',
  },
  {
    value: 'pizza',
    label: 'Pizze',
  },
  {
    value: 'dessert',
    label: 'Dessert',
  },
];

export default function AddProduct(props) {
  const [currency, setCurrency] = useState('EUR');
  const [prodName, setProdName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [prodImage, setProdImage] = useState('');


  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = () =>{

  }

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
      <TextField className='AggiuntaProdotto' id="prodName" label="Nome" variant="filled" />
      <TextField className='AggiuntaProdotto' id="description" label="Descrizione" variant="filled" />
      <TextField className='AggiuntaProdotto' id="price" label="Prezzo" variant="filled" />
      <Button variant="contained" component="label"><input type="file" id='prodImage'/></Button>
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
      <Button className="ButtonClose" onClick={()=>props.setTrigger(false) }>Chiudi aggiunta Prodotto</Button>
      <Button className="ButtonSubmit" onClick={()=>handleSubmit()}>Aggiungi prodotto</Button>
      </div>
      
    </Box>
    </div>
  ):""
}

