import React from "react";
import { useNavigate } from "react-router-dom";

const modelos = [
  { id: 1, nome: "Modelo Simples", imagem: "/img/curriculoSimples.png" },
];

const SelecaoModelo: React.FC = () => {
  const navigate = useNavigate();

  const selecionarModelo = (id: number) => {
    navigate("/form", { state: { modeloSelecionado: id } });
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-1">Selecione um Modelo de Currículo</h1>
      <h5 className="mb-4">(Em breve mais modelos! aguarde...)</h5>
      <div className="row justify-content-center">
        {modelos.map((modelo) => (
          <div
            key={modelo.id}
            className="col-md-4 col-sm-6 mb-4"
            onClick={() => selecionarModelo(modelo.id)}
          >
            <div className="card" style={{ cursor: "pointer" }}>
              <img
                src={modelo.imagem}
                alt={modelo.nome}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">{modelo.nome}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelecaoModelo;