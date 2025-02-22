import React, { useState } from 'react';

interface Idiomas {
  idioma: string;
  fluencia: string;
}

interface IdiomasProps {
  idiomas: Idiomas[];
  setIdiomas: React.Dispatch<React.SetStateAction<Idiomas[]>>;
}

const Idiomas: React.FC<IdiomasProps> = ({ idiomas, setIdiomas }) => {
  const [novaIdiomas, setNovaIdiomas] = useState<Idiomas>({
    idioma: '',
    fluencia: '',
  });

  const adicionarIdioma = () => {
    if (novaIdiomas.idioma && novaIdiomas.fluencia) {
      setIdiomas([...idiomas, novaIdiomas]);
      setNovaIdiomas({ idioma: '', fluencia: '' });
    }
  };
  const removerIdioma = (index: number) => {
    const novosIdiomas = idiomas.filter((_, i) => i !== index);
    setIdiomas(novosIdiomas);
  };

  return (
    <div className="form-group mt-3">
      <label>Idiomas:</label>
      <div>
        {idiomas.map((idi, index) => (
            <div key={index} className="mb-2 row mt-2">
                <div className='col-md'>
                    <strong>{idi.idioma}</strong> - {idi.fluencia}
                </div>
                <div className='col col-sm-1 me-2 align-content-end'>
                <a className="text-decoration-none text-black" onClick={() => removerIdioma(index)}>
                <i className="bi bi-trash3"></i>
                </a></div>
            </div>
        ))}
      </div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Idioma"
        value={novaIdiomas.idioma}
        onChange={(e) => setNovaIdiomas({ ...novaIdiomas, idioma: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nivel (Fluente, Intermediario...)"
        value={novaIdiomas.fluencia}
        onChange={(e) => setNovaIdiomas({ ...novaIdiomas, fluencia: e.target.value })}
      />
      <button className="btn-color" onClick={adicionarIdioma}>
        Adicionar
      </button>
    </div>
  );
};

export default Idiomas;