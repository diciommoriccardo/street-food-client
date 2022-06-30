import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Products from '../helpers/Products';
import '../styles/aggiuntaProdotto.css'
import {useNavigate} from 'react-router-dom';



export default function AddProduct(props) {
  const [currency, setCurrency] = useState('panino');
  const [prodName, setProdName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [prodImage, setProdImage] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  
  const cat = [
    {
      value: 'panino',
      label: 'Panini',
    },
    {
      value: 'bibite',
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

  const handleSubmit = (e) =>{
    
    return new Promise((resolve) => {
      let formData = new FormData();
      formData.append('displayName', prodName)
      formData.append('description', description)
      formData.append('prodImage', prodImage)
      formData.append('price', price)
      formData.append("category", category)
      Products.add(formData)
    .then(data => {
      console.log(data)
      alert("Prodotto aggiunto")
      resolve(navigate('../menu'))
      
    })
    .catch(err => alert(err))
  })

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
      <TextField className='AggiuntaProdotto1' id="prodName" label="Nome" variant="filled" value={prodName} onChange={(e) => setProdName(e.target.value)}/>
      <TextField className='AggiuntaProdotto2' id="description" label="Descrizione" variant="filled" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <TextField className='AggiuntaProdotto3' id="price" label="Prezzo" variant="filled" value={price} onChange={(e) => setPrice(e.target.value)}/>
      <Button style={{backgroundColor: 'var(--BLU_POLIBA)', padding: '10px 10px'}} id="formdrag" variant="contained" component="label">
        <input type="file" id='prodImage' onChange={(e) => setProdImage(e.target.files[0])}/></Button>
        <TextField
          className='AggiuntaProdotto'
          id="Categoria"
          select
          label="Seleziona Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Seleziona la categoria"
          variant="filled"
        >
          {cat.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <Button style={{
            backgroundColor: 'var(--BLU_POLIBA)', color: 'white'
          }} className="ButtonClose" onClick={()=>props.setTrigger(false) }>Chiudi aggiunta Prodotto</Button>
      <Button className="ButtonSubmit" onClick={()=>handleSubmit()}>Aggiungi prodotto</Button>
      </div>
      
    </Box>
    </div>
  ):""
}

