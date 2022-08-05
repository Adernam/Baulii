import React, { useContext } from 'react';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { StyledButton } from "../../global/GlobalStyled";
import FormasDePagamentos from "./FormasDePagamentos";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Footer from '../../components/Footer/Footer';
import { useProtectPage } from '../../routes/coordinator';
import CardEnderecos from '../../components/CardEnderecos/CardEnderecos';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import {
  PagamentosContainer,
  CarrinhoContainer,
  ImgContainer,
  CardContainer,
  InfoContainer,
  ButtonRemove,
  Content
} from "../PaginaCarrinho/styled";


const PaginaCarrinho = () => {
  useProtectPage();
  const [form, onChange, clear] = useForm({});
  const { productAdd, setProductAdd } = useContext(GlobalStateContext);
  const { currentRestaurant } = useContext(GlobalStateContext);
  const { paymentMethod } = useContext(GlobalStateContext);

  const gerarPedido = () => {
    const auth = localStorage.getItem("token");
    const headers = {
      headers: {
        auth: auth
      }
    };

    const body = {
      products: productAdd.map((item) => {
        return { id: item.id, quantity: item.quantity }
      }),
      paymentMethod: paymentMethod
    };

    axios.post(`${BASE_URL}/restaurants/${currentRestaurant.id}/order`, body, headers)
      .then((res) => {
        clear()
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  };



  const total = productAdd.reduce((total, item) =>
    total + item.price * item.quantity + currentRestaurant.shipping, 0
  );

  const removerProduto = (produtos) => {
    const product = productAdd.find((item) => {
      return item.id === produtos.id
    });

    if (product.quantity <= 1) {
      const novoCarrinho = productAdd.filter((produto) => {
        return produto.id !== produtos.id
      })

      setProductAdd(novoCarrinho);
    } else {
      const novoCarrinho = productAdd.map((produto) => {

        if (produto.id === produtos.id) {
          const carrinho = { ...produto, quantity: produto.quantity - 1 }
          return carrinho
        };

        return produto;
      })
      setProductAdd(novoCarrinho);
    };
  };

  const CarrinhoDeCompras = productAdd && productAdd.map((produto) => {
    return (
      <CardContainer>
        <div key={produto.id} >
          <ImgContainer src={produto.photoUrl} />
        </div>
        <InfoContainer>
          <strong>{produto.name}</strong>
          <Content>{produto.description}</Content>
          <p> R$ {produto.price}</p>
          <p>Quantidade: {produto.quantity}</p>
          <ButtonRemove color='primary' variant="contained" onClick={() => removerProduto(produto)}>Remover</ButtonRemove>

        </InfoContainer>

      </CardContainer>
    );
  });

  return (
    <CarrinhoContainer>

      <h2>Carrinho de Compras</h2>
      <CardEnderecos />
      {CarrinhoDeCompras.length > 0 ? CarrinhoDeCompras : <p>Carrinho Vazio <ShoppingCartOutlinedIcon /></p>}
      <p>Frete R$ {currentRestaurant.shipping}</p>
      <p>SubTotal: R$ {total}</p>
      <PagamentosContainer>
        <FormasDePagamentos />
      </PagamentosContainer>
      <StyledButton color='primary' variant="contained" onClick={gerarPedido} >Gerar Pedido</StyledButton>
      <Footer />

    </CarrinhoContainer>
  );
};

export default PaginaCarrinho;