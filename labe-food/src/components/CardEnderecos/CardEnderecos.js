import React, { useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { EnderecoUsuario, EnderecoRestaurante } from './styled';

const CardEnderecos = () => {
    const { addressUser } = useContext(GlobalStateContext);
    const { currentRestaurant } = useContext(GlobalStateContext);

    return (
        <div>
            <EnderecoUsuario>
                <p>Endereço de entrega</p>
                <p>{addressUser.street}, {addressUser.number}</p>
            </EnderecoUsuario>
            <EnderecoRestaurante>
                <p>{currentRestaurant.name}</p>
                <p>{currentRestaurant.address}</p>
            </EnderecoRestaurante>
        </div>
    );
};

export default CardEnderecos;