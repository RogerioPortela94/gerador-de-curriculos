import React, { useState } from 'react';

interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
}

interface ExperienciasProps {
  experiencias: Experiencia[];
  setExperiencias: React.Dispatch<React.SetStateAction<Experiencia[]>>;
}

const Experiencias: React.FC<ExperienciasProps> = ({ experiencias, setExperiencias }) => {
  const [novaExperiencia, setNovaExperiencia] = useState<Experiencia>({
    empresa: '',
    cargo: '',
    periodo: '',
    descricao: '',
  });

  const adicionarExperiencia = () => {
    if (novaExperiencia.empresa && novaExperiencia.cargo) {
      setExperiencias([...experiencias, novaExperiencia]);
      setNovaExperiencia({ empresa: '', cargo: '', periodo: '', descricao: '' });
    }
  };
  const removerExperiencia = (index: number) => {
    const novaExperiencia = experiencias.filter((_, i) => i !== index);
    setExperiencias(novaExperiencia);
  };

  return (
    <div className="form-group">
      <div>
        {experiencias.map((exp, index) => (
          <div className='row mt-2 mb-2' key={index}>
            <div className='col-md'>
              <strong>{exp.empresa}</strong> - {exp.cargo} ({exp.periodo})
              <div style={{whiteSpace: 'pre-line'}}>{exp.descricao}</div>
            </div>
            <div className='col col-sm-1 me-2 align-content-end'>
              <a className="text-text-decoration-none text-black" onClick={() => removerExperiencia(index)}>
                <i className='bi bi-trash3'></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Empresa"
        value={novaExperiencia.empresa}
        onChange={(e) => setNovaExperiencia({ ...novaExperiencia, empresa: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Cargo"
        value={novaExperiencia.cargo}
        onChange={(e) => setNovaExperiencia({ ...novaExperiencia, cargo: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Período"
        value={novaExperiencia.periodo}
        onChange={(e) => setNovaExperiencia({ ...novaExperiencia, periodo: e.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Descrição das Atividades"
        value={novaExperiencia.descricao}
        onChange={(e) => setNovaExperiencia({ ...novaExperiencia, descricao: e.target.value })}
      />
      <button className="btn-color" onClick={adicionarExperiencia}>
        Adicionar
      </button>
     
    </div>
  );
};

export default Experiencias;