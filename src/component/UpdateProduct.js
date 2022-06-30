import React, { useEffect, useState } from "react";
import { 
    Grid,
    Button,
    FormControlLabel,
    Checkbox,
    TextField,
    Link 
} from "@mui/material";
import '../styles/updateProduct.css';
import { useLocation, useNavigate} from "react-router-dom";
import productServices from "../helpers/Products";


function UpdateProduct(props){
    const [_id, setId] = useState('')
    const [description, setDescription] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [price, setPrice] = useState('');
    const [prodImage, setProdImage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault()
      let formData = new FormData();
      formData.append('_id', _id)
      formData.append('displayName', displayName)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('prodImage', prodImage)
      productServices.updateOne(formData)
      .then(data => {
        console.log(data);
        return navigate('/menu')
      })
      .catch(err => console.log(err))
    }

    useEffect(() => {
      setId(location.state._id)
      setDescription(location.state.description)
      setDisplayName(location.state.displayName)
      setPrice(location.state.price)
      setProdImage(location.state.image)
      console.log(displayName)
    }, [])

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
                onChange={(e) => setProdImage(e.target.files[0])}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="updateButton"
            onClick={handleSubmit}
          >
            Aggiorna
          </Button>
        </form>
        </div>
    )
}

export default UpdateProduct