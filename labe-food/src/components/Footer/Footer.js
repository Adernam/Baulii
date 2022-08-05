import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { irParaCarrinho, irParaHome, irParaLogin, irParaPerfil } from '../../routes/coordinator';

const Footer = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [botaoDireito, setBotaoDireito] = useState(token ? 'Logout' : 'Login');

  const logout = () => {
    localStorage.removeItem('token');
  };

  const acaoBotaoDireito = () => {
    if (token) {
      logout();
      setBotaoDireito('Login');
      irParaLogin(navigate);
    } else {
      irParaLogin(navigate);
    };
  };

  return (
    <AppBar position='static'>
      <StyledToolbar>
        <HomeIcon onClick={() => irParaHome(navigate)} />
        <ShoppingCartIcon onClick={() => irParaCarrinho(navigate)} />
        <PersonIcon onClick={() => irParaPerfil(navigate)} />
        <ExitToAppIcon onClick={acaoBotaoDireito}>{botaoDireito} </ExitToAppIcon>
      </StyledToolbar>
    </AppBar>
  );
};

export default Footer;