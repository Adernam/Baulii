import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { CardRestaurant } from './CardRestaurant';
import { Container, DivFooter, DivSearch, InputSearch, LogoHome, LogoHomeDiv, SelectRestaurantType, TelaInicial } from './styled';
import SelectType from './SelectType';
import { useProtectPage } from '../../routes/coordinator';
import LogoVermelha from '../.././assets/logo-vermelha.png';
import Splash from '../../assets/Tela-Inicial.png';
import Footer from '../../components/Footer/Footer';


const PaginaHome = () => {
  useProtectPage();
  const { restaurantList } = useContext(GlobalStateContext);
  const [busca, setBusca] = useState('');
  const [tipoDeRestaurante, setTipoDeRestaurante] = useState('');
  const { setCurrentRestaurant } = useContext(GlobalStateContext);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 3000)
  }, []);

  const setRest = (rest) => {
    setCurrentRestaurant(rest)
  };

  const cardRestaurant = restaurantList && restaurantList.map((item) => {
    return (
      <CardRestaurant
        item={item}
        setRest={setRest}
      />
    );
  });

  const typeRestaurant = restaurantList && restaurantList.map((item) => {
    return (
      <SelectType
        item={item}
        tipoDeRestaurante={tipoDeRestaurante}
        setTipoDeRestaurante={setTipoDeRestaurante}
      />
    );
  });

  const restaurantFilter = restaurantList && restaurantList.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(busca.toLowerCase()) && (!tipoDeRestaurante || restaurant.category === tipoDeRestaurante);
  });

  return (
    <Container >
      {showSplash && <TelaInicial src={Splash} />}
      <LogoHomeDiv key={'logo'}>
        <LogoHome src={LogoVermelha} alt='labefood' />
      </LogoHomeDiv>
      <DivSearch key='buscar'>
        <InputSearch
          id="outlined-basic"
          label="Buscar restaurante"
          variant="outlined"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <SelectRestaurantType>
          {typeRestaurant}
        </SelectRestaurantType>
      </DivSearch>
      {restaurantFilter && restaurantFilter.map((restaurant) => {
        return (
          <CardRestaurant
            item={restaurant}
          />
        )
      })}
      <DivFooter>
        <Footer />
      </DivFooter>
    </Container>
  );
};

export default PaginaHome;