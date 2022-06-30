import React, { useState } from "react";
import { 
    Grid,
    Button,
    FormControlLabel,
    Checkbox,
    TextField,
    Link 
} from "@mui/material";
import '../styles/updateProduct.css'

function UpdateProduct(props){
    const [_id, setId] = useState('')
    const [description, setDescription] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [price, setPrice] = useState('')

    return (
        <div className="updateContainer">
          <header>
          <h2>Modifica prodotto</h2>
          </header>
        <form className="updateForm" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="displayName"
                variant="outlined"
                fullWidth
                id="displayName"
                label="Nome Prodotto"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                label="Descrizione"
                name="description"
                autoComplete="lname"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="price"
                label="Prezzo"
                name="price"
                autoComplete="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type='file'
                id='prodImage'
                name='prodImage'
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="updateButton"
          >
            Aggiorna
          </Button>
        </form>
        </div>
    )
}

export default UpdateProduct