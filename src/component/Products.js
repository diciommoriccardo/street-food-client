import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../contexts/CartContext';
import UserContext from '../contexts/UserContext';
import productServices from '../helpers/Products';



function Product (props){

  const { count, setCount } = useContext(CartContext)
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext)
  const [cardDisplay, setCardDisplay] = useState(true)

  const handleDelete = (e) => {
    productServices.delete(props._id)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  const remove = () =>{
    setCardDisplay(false)
  }

  return(
    <Card sx={{ maxWidth: 345 }} style={{ display:  cardDisplay ? 'block' : 'none'}} onClick={remove}>
  <CardMedia
    component="img"
    height="140"
    image={props.img}
    alt={props.displayName}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {props.displayName}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {props.description}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" onClick={() => {
      setCount(count => count+1);
      localStorage.setItem(props._id, JSON.stringify({
        _id: props._id,
        image: props.img,
        displayName: props.displayName,
        description: props.description,
        price: props.price
      }))
      }}><AddShoppingCartIcon /></Button>
      {user.type == 'admin' ? <Button size='small' onClick={(e) => handleDelete(e)}><DeleteIcon /></Button> : <></>}
    {/* <Button size="small">Learn More</Button> */}
  </CardActions>
</Card>
  ) 
}


export default Product;