import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Musica() {

    const { id } = useParams();

    const [musica, setMusica] = useState<any>(null);

    const [comentario, setComentario] =
        useState("");

    const [comentarios, setComentarios] =
        useState<any[]>([]);

    useEffect(() => {

        axios
            .get(`http://localhost:3000/musica/${id}`)
            .then((res) => {

                setMusica(res.data.data);

            });

        axios
            .get("http://localhost:3000/comentario")
            .then((res) => {

                const filtrados =
                    res.data.data.filter(
                        (c:any) => c.musicaId === id
                    );

                setComentarios(filtrados);

            });

    }, [id]);

    function curtir() {

        axios.post(
            "http://localhost:3000/playlist",
            {
                clienteId:
                    localStorage.getItem("userId"),
                musicaId: id
            }
        );

        alert(
            "Música adicionada à biblioteca!"
        );

    }

    function enviarComentario() {

        if (!comentario.trim()) {

            alert(
                "Digite um comentário."
            );

            return;

        }

        axios.post(
            "http://localhost:3000/comentario",
            {
                clienteId:
                    localStorage.getItem("userId"),
                musicaId: id,
                texto: comentario
            }
        )
        .then(() => {

            setComentarios([
                ...comentarios,
                {
                    texto: comentario
                }
            ]);

            setComentario("");

            alert(
                "Comentário enviado!"
            );

        });

    }

    if (!musica) {

        return <h1>Carregando...</h1>;

    }

    return (

        <div className="home">

            <h1>
                {musica.titulo}
            </h1>

            <h2>
                {musica.artista}
            </h2>

            <br />

            <p>
                <strong>
                    Gênero:
                </strong>{" "}
                {musica.genero}
            </p>

            <p>
                <strong>
                    Duração:
                </strong>{" "}
                {musica.duracao}
            </p>

            <p>
                <strong>
                    Ano:
                </strong>{" "}
                {musica.ano}
            </p>

            <br />

            <button
                className="btn-spotify"
                onClick={curtir}
            >
                Adicionar à Biblioteca
            </button>

            <br />
            <br />

            <h3>Letra</h3>

            <p
                style={{
                    whiteSpace:
                        "pre-line"
                }}
            >
                {musica.letra}
            </p>

            <br />

            <h3>
                Deixe seu comentário
            </h3>

            <textarea
                value={comentario}
                onChange={(e) =>
                    setComentario(
                        e.target.value
                    )
                }
                placeholder="O que você achou desta música?"
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    height: "120px",
                    padding: "10px",
                    borderRadius: "10px"
                }}
            />

            <br />
            <br />

            <button
                className="btn-spotify"
                onClick={
                    enviarComentario
                }
            >
                Enviar Comentário
            </button>

            <br />
            <br />

            <h3>Comentários</h3>

            {comentarios.map(
                (c, index) => (

                    <div
                        key={index}
                        className="card-musica"
                        style={{
                            marginTop:
                                "10px"
                        }}
                    >

                        <p>
                            {c.texto}
                        </p>

                    </div>

                )
            )}

        </div>

    );

}

export default Musica;