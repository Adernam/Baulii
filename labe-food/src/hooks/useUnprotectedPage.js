import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { irParaHome } from '../routes/coordinator';


const useUnprotectdPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            irParaHome(navigate);
        };

    }, [navigate]);
};

export default useUnprotectdPage;