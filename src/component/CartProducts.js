import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function CartProducts(props){

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
    <Button size="small"><RemoveIcon /></Button>
    <Button size="small"><AddIcon /></Button>
  </CardActions>
</Card>
    )
}

export default CartProducts