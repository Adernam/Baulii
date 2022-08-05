import React, { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import { Place, RecipeCardContainer, DivFooter } from './styled';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { StyledButton } from '../../global/GlobalStyled';


const PaginaDetalhes = () => {
  const params = useParams();
  const { productAdd, setProductAdd } = useContext(GlobalStateContext);
  const [restaurant] = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`);
  const { setCurrentRestaurant } = useContext(GlobalStateContext);

  useEffect(() => {
    setCurrentRestaurant(restaurant.restaurant);
  }, [restaurant]);

  const MenuRestaurant = restaurant.restaurant && restaurant.restaurant.products.map((comida) => {
    return (<Place key={comida.id}>
      <CardActionArea >
        <CardMedia component={'img'} alt={'imagem'}
          height={'150px'} image={comida.photoUrl} title={'Hamburguer'}
        >
        </CardMedia>
        <Typography align='center'>
          <h2>{comida.name}</h2>
          <h5>{comida.description}</h5>
          <h3>R$ {comida.price}</h3>
        </Typography>
        <StyledButton color='primary' variant='contained' onClick={() => adicionarProduto(comida)} >Adicionar</StyledButton>
      </CardActionArea>
    </Place>
    );
  });

  const adicionarProduto = (comida) => {
    alert('Produto adicionado ao carrinho');

    const indexProdutos = productAdd.findIndex((i) => {
      return i.id === comida.id;
    });

    if (indexProdutos !== -1) {
      const novoCarrinho = [...productAdd];
      novoCarrinho[indexProdutos].quantity++;
      setProductAdd(novoCarrinho);
    } else {
      const novoCarrinho = [...productAdd, { ...comida, quantity: 1 }];
      setProductAdd(novoCarrinho);
    };
  };

  return (
    <div>
      <RecipeCardContainer>
        {restaurant.restaurant && <CardActionArea key={restaurant.restaurant.id}>
          <CardMedia component={'img'} alt={'imagem'}
            height={'150px'} image={restaurant.restaurant.logoUrl}>
          </CardMedia>
          <Typography align='center'>
            <h2>{restaurant.restaurant.category}</h2>
            <p>{restaurant.restaurant.deliveryTime}min R$ {restaurant.restaurant.shipping},00 </p>
            <p> {restaurant.restaurant.address}</p>
          </Typography>
        </CardActionArea>}
        {MenuRestaurant}
      </RecipeCardContainer>
      <DivFooter>
        <Footer />
      </DivFooter>
    </div>
  );
};

export default PaginaDetalhes;