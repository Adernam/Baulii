import { GlobalStateContext } from './GlobalStateContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export default function GlobalState(props) {
    const [restaurantList, setRestaurantList] = useState([]);
    const [addressUser, setAddressUser] = useState([]);
    const [orderHistory, setOrderHistory] = useState([]);
    const [activeOrder, setActiveOrder] = useState([]);
    const [productAdd, setProductAdd] = useState([]);
    const [userStats, setUserStats] = useState([]);
    const [currentRestaurant, setCurrentRestaurant] = useState({});
    const [paymentMethod, setPaymentMethod] = useState([]);

    const headers = {
        headers: {
            Auth: localStorage.getItem('token')
        }
    };

    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, headers)
            .then((response) => {
                setUserStats(response.data.user);
            }).catch((error) => console.log(error));
    };

    const getRestaurantList = () => { //pega a lista de restaurantes da API

        axios.get(`${BASE_URL}/restaurants`, headers)
            .then((response) => {
                setRestaurantList(response.data.restaurants);
            }).catch((error) => console.log(error));
    };

    const getAddressUser = () => { //pega endereço do usuario
        axios.get(`${BASE_URL}/profile/address`, headers)
            .then((response) => {
                setAddressUser(response.data.address);
            }).catch((error) => console.log(error.message));
    };

    const getOrderHistory = () => { //pega a historico de pedidos do usuario
        axios.get(`${BASE_URL}/orders/history`, headers)
            .then((response) => {
                setOrderHistory(response.data.orders);
            }).catch((error) => console.log(error.message));
    };

    const getActiveOrder = () => { //pega pedido ativo do usuario
        axios.get(`${BASE_URL}/active-order`, headers)
            .then((response) => {
                setActiveOrder(response.data.order);
            }).catch((error) => console.log(error.message));
    };

    useEffect(() => {
        getRestaurantList();
        getAddressUser();
        getOrderHistory();
        getActiveOrder();
        getProfile();
    }, []);

    const data = {
        userStats,
        setUserStats,
        restaurantList,
        setRestaurantList,
        addressUser,
        setAddressUser,
        orderHistory,
        setOrderHistory,
        activeOrder,
        setActiveOrder,
        productAdd,
        setProductAdd,
        currentRestaurant,
        setCurrentRestaurant,
        paymentMethod,
        setPaymentMethod,
    };

    return (
        <div>
            <GlobalStateContext.Provider value={data} >
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    );
};