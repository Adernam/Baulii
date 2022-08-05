import styled from 'styled-components';
import { StyledButton } from '../../global/GlobalStyled';

export const EnderecoUsuario = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid black;
    height: 6em;
    background-color: grey;
    font-family: 'Roboto', sans-serif;
`
export const EnderecoRestaurante = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 6em;
    justify-content: space-around;
    border: 1px solid black;
    font-family: 'Roboto', sans-serif;
`
export const PagamentosContainer = styled.div`
    padding: 10px;
    margin-top: 2em;
`
export const CarrinhoContainer = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

export const ImgContainer = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 15px;
`
export const CardContainer =styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ButtonRemove = styled(StyledButton)`
    width: 100px;
`
export const Content = styled.p`
    margin: 10px;
`