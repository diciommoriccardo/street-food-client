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
    }

    render(){
      return(
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt={this.props.displayName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {this.props.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {this.props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><AddShoppingCartIcon /></Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
      )
    }
}


export default Product;