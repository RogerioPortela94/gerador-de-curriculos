import React, { useState } from 'react';

interface Cursos {
  curso: string;
  instituicao: string;
  ano: string;
  cargaHoraria: string;
}

interface CursosProps {
  cursos: Cursos[];
  setCursos: React.Dispatch<React.SetStateAction<Cursos[]>>;
}

const Cursos: React.FC<CursosProps> = ({ cursos, setCursos }) => {
  const [novoCurso, setNovoCurso] = useState<Cursos>({
    curso: '',
    instituicao: '',
    ano: '',
    cargaHoraria: '',
  });

  const adicionarCurso = () => {
    if (novoCurso.instituicao && novoCurso.curso) {
      setCursos([...cursos, novoCurso]);
      setNovoCurso({ instituicao: '', curso: '', ano: '', cargaHoraria: '' });
    }
  };

  const removerCurso = (index: number) => {
    const novoCurso = cursos.filter((_, i) => i !== index);
    setCursos(novoCurso);
  };

  return (
    <div className="form-group">
      <label className='mt-4'>Cursos Livres:</label>
      <div>
        {cursos.map((curs, index) => (
          <div className='row mb-3 mt-2' key={index}>
            <div className='col-md'><strong>{curs.curso}</strong> - {curs.instituicao} ({curs.cargaHoraria}/{curs.ano})</div>
            <div className='col col-sm-1 me-2 align-content-end'>
              <a className="text-decoration-none text-black" onClick={() => removerCurso(index)}>
                <i className='bi bi-trash3'></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Curso"
        value={novoCurso.curso}
        onChange={(e) => setNovoCurso({ ...novoCurso, curso: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Instituição"
        value={novoCurso.instituicao}
        onChange={(e) => setNovoCurso({ ...novoCurso, instituicao: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Ano"
        value={novoCurso.ano}
        onChange={(e) => setNovoCurso({ ...novoCurso, ano: e.target.value })}
      />
      <input
        type='text'
        className="form-control mb-2"
        placeholder="Carga Horaria"
        value={novoCurso.cargaHoraria}
        onChange={(e) => setNovoCurso({ ...novoCurso, cargaHoraria: e.target.value })}
      />
      <button className="btn-color" onClick={adicionarCurso}>
        Adicionar
      </button>
    </div>
  );
};

export default Cursos;