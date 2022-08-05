import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const irParaLogin = (navigate) => {
    navigate("/");
};

export const irParaCadastro = (navigate) => {
    navigate("/cadastro");
};

export const irParaHome = (navigate) => {
    navigate("/home/");
};

export const irParaPerfil = (navigate) => {
    navigate("/perfil");
};

export const irParaCarrinho = (navigate) => {
    navigate("/carrinho");
};

export const irParaDetalhes = (navigate,id) =>{
    navigate(`/detalhes/${id}`);
};

export const useProtectPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token === null) {
            navigate('/')
        };
    });
};