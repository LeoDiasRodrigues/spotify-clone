import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Perfil() {

    const [clientes, setClientes] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get("http://localhost:3000/cliente")
            .then((res) => {
                setClientes(res.data.data);
            });

    }, []);

    function entrar(id:string){

        localStorage.setItem("userId", id);

        navigate("/home");

    }

    return (

        <div className="perfil-container">

            <h1>Quem está ouvindo?</h1>

            {clientes.map((cliente) => (

                <div
                    key={cliente._id}
                    className="perfil-card"
                    onClick={() => entrar(cliente._id)}
                >

                    <div className="perfil-avatar"></div>

                    <h2>{cliente.nome}</h2>

                </div>

            ))}

        </div>

    );

}

export default Perfil;