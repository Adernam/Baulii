import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardEstilizado, DivFrete } from './styled'
import { irParaDetalhes } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';


export const CardRestaurant = (props) => {
  const navigate = useNavigate();

  const onClickCard = (id) => {
    irParaDetalhes(navigate, id);
  };

  return (
    <CardEstilizado onClick={() => onClickCard(props.item.id)} sx={{
      width: 300,
      maxWidth: 350
    }}>
      <CardMedia
        key={props.item.id}
        component="img"
        height="140"
        image={props.item.logoUrl}
        alt="restaurant"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2">
          {props.item.description}
        </Typography>
      </CardContent>
      <DivFrete>
        <p>tempo de entrega {props.item.deliveryTime} minutos </p>
        <p>frete R${props.item.shipping}</p>
      </DivFrete>
    </CardEstilizado>
  );
};