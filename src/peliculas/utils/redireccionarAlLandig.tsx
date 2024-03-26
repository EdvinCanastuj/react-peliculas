import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RedireccionarAlLanding() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return null;
}