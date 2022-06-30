import React, {useState, useContext, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ordersServices from '../helpers/Orders';
import UserContext from '../contexts/UserContext';

function RecipeReviewCard(props){
  const [status, setStatus] = useState('');
  const {user, setUser, loggedIn, setLoggedIn} = useContext(UserContext)

  useEffect(() => {
    setStatus(props.status)
  }, [])

  useEffect(() => {}, [status])

  const changeStatus = () => {
    ordersServices.updateStatus({
      _id: props._id,
      date: props.date,
      price: props.price,
      description: props.description,
      status: status === 'pagato' ? 'in lavorazione' : 'completato'
    })
    .then(data => setStatus(data.status))
    .catch(err => console.log(err))
  }

  return(
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.price}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<CircleIcon style={{color : status === 'pagato' || status === 'in lavorazione' ? 'red' : 'green'}}  />}>
          {status}
        </Button>
        {user.type == 'cuoco' && status != 'completato' ? 
          <Button startIcon={<CheckIcon />} style={{fontSize:"10px"}} onClick={changeStatus}>
          {status == 'pagato' ? 'Segna come: in lavorazione' : "Segna come: completato"}
        </Button> : <></>}
        
      </CardActions>
    </Card>
  )

}

export default RecipeReviewCard;