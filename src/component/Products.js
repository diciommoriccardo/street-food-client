import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName: props.data.displayName,
            description: props.data.description,
            price: props.data.price,
            category: props.data.category
        }
    }
}


export default function MediaCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt={this.state.displayName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {this.state.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {this.state.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><AddShoppingCartIcon /></Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
