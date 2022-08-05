import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { irParaLogin } from '../routes/coordinator';


const useProtectdPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            irParaLogin(navigate);
        };

    },[navigate]);
};

export default useProtectdPage;