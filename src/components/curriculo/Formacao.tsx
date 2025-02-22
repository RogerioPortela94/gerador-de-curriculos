import React, { useState } from 'react';

interface Formacao {
  instituicao: string;
  curso: string;
  conclusao: string;
  localizacao: string;
}

interface FormacaoProps {
  formacoes: Formacao[];
  setFormacao: React.Dispatch<React.SetStateAction<Formacao[]>>;
}

const Formacao: React.FC<FormacaoProps> = ({ formacoes, setFormacao }) => {
  const [novaFormacao, setNovaFormacao] = useState<Formacao>({
    instituicao: '',
    curso: '',
    conclusao: '',
    localizacao: '',
  });

  const adicionarFormacao = () => {
    if (novaFormacao.instituicao && novaFormacao.curso) {
      setFormacao([...formacoes, novaFormacao]);
      setNovaFormacao({ instituicao: '', curso: '', conclusao: '', localizacao: '' });
    }
  };
  const removerFormacao = (index: number) => {
    const novaFormacao = formacoes.filter((_, i) => i !== index);
    setFormacao(novaFormacao);
  };

  return (
    <div className="form-group mt-3">
      <label>Formação:</label>
      <div>
        {formacoes.map((form, index) => (
          <div className='row mb-3 mt-3' key={index}>
            <div className='col-md'><strong>{form.instituicao}</strong> - {form.curso} - {form.localizacao} ({form.conclusao})</div>
            <div className='col col-sm-1 me-2 align-content-end'>
              <a className="text-decoration-none text-black" onClick={() => removerFormacao(index)}>
                <i className='bi bi-trash3'></i>
              </a>
            </div>

          </div>
        ))}
      </div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Instituição"
        value={novaFormacao.instituicao}
        onChange={(e) => setNovaFormacao({ ...novaFormacao, instituicao: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Curso"
        value={novaFormacao.curso}
        onChange={(e) => setNovaFormacao({ ...novaFormacao, curso: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Conclusão"
        value={novaFormacao.conclusao}
        onChange={(e) => setNovaFormacao({ ...novaFormacao, conclusao: e.target.value })}
      />
      <input
        type='text'
        className="form-control mb-2"
        placeholder="Localização"
        value={novaFormacao.localizacao}
        onChange={(e) => setNovaFormacao({ ...novaFormacao, localizacao: e.target.value })}
      />
      <button className="btn-color" onClick={adicionarFormacao}>
        Adicionar
      </button>
    </div>
  );
};

export default Formacao;