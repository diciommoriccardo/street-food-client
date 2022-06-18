import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Panino diciotto
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Sto panino è meglio di un 18, i voit cio t manggggg la zquein d mamt
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accatl</Button>
        <Button size="small">Questo bottone non fa nulla</Button>
      </CardActions>
    </Card>
  );
}
