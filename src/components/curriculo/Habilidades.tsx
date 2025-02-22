import React, { useState } from 'react';

interface HabilidadesProps {
  habilidades: string[];
  setHabilidades: React.Dispatch<React.SetStateAction<string[]>>;
}

const Habilidades: React.FC<HabilidadesProps> = ({ habilidades, setHabilidades }) => {
  const [novaHabilidade, setNovaHabilidade] = useState('');

  const adicionarHabilidade = () => {
    if (novaHabilidade.trim()) {
      setHabilidades([...habilidades, novaHabilidade]);
      setNovaHabilidade('');
    }
  };

  const removerHabilidade = (index: number) => {
    const novaHabilidade = habilidades.filter((_, i) => i !== index);
    setHabilidades(novaHabilidade);
  };

  return (
    <div className="form-group mt-3 text-secondary">
      <label>Habilidades:</label>
      <div>
        {habilidades.map((habilidade, index) => (
          <ul className='row mb-3 mt-3' key={index}>
            <li className='col-md'><strong>{habilidade}</strong></li>
            <div className='col col-sm-1 me-2 align-content-end'>
              <a className="text-decoration-none text-black" onClick={() => removerHabilidade(index)}>
                <i className='bi bi-trash3'></i>
              </a>
            </div>

          </ul>
        ))}
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          value={novaHabilidade}
          onChange={(e) => setNovaHabilidade(e.target.value)}
        />
        <button className="btn-color" onClick={adicionarHabilidade}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Habilidades;