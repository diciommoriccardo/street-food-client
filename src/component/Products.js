import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../contexts/CartContext';



function Product (props){

  const { count, setCount } = useContext(CartContext)

  return(
    <Card sx={{ maxWidth: 345 }}>
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
        image: props.img,
        displayName: props.displayName,
        description: props.description
      }))
      }}><AddShoppingCartIcon /></Button>
    {/* <Button size="small">Learn More</Button> */}
  </CardActions>
</Card>
  ) 
}


export default Product;