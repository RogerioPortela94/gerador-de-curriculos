import React from 'react';

interface ModeloProps {
  dados: {
    nome: string;
    nacionalidade: string;
    idade: number;
    estadoCivil: string;
    email: string;
    telefone: string;
    endereco:{
      rua: string;
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
    };
    links: {
      url: string;
      tipo: string;
    }[];
    objetivos: string;
    resumo: string;
    experiencias: {
      empresa: string;
      cargo: string;
      periodo: string;
      descricao: string;
    }[];
    formacao: {
      instituicao: string;
      curso: string;
      conclusao: string;
      localizacao: string;
    }[];
    habilidades: string[];
    idiomas: {
      idioma: string;
      fluencia: string;
    }[];
    cursos: {
      curso: string;
      instituicao: string;
      ano: string;
      cargaHoraria: string;
    }[];
  };
}

const ModeloSimples: React.FC<ModeloProps> = ({dados}) => {

  return (
    <div className="border p-3" style={{ width: '210mm', minHeight: '297mm' }}>
      <div id='header' className='container-fluid text-center mt-5'>
        <h2 className='mt-5'><strong>{(dados.nome || 'NOME COMPLETO').toUpperCase()}</strong> </h2>
        <p className='mb-0'> 
          {dados.nacionalidade || ''}
          {dados.nacionalidade && dados.estadoCivil ? ' • ' : ''}
          {dados.estadoCivil || ''}
          {dados.estadoCivil && dados.idade || dados.idade && dados.nacionalidade ? ' • ' : ''}
          {dados.idade ? dados.idade + ' anos' : ''}
        </p>
        <p className='mb-0'>
          {dados.endereco.rua || ''}
          {dados.endereco.rua && dados.endereco.numero || dados.endereco.rua && dados.endereco.bairro || dados.endereco.rua && dados.endereco.estado || dados.endereco.rua && dados.endereco.cidade ? ", ":''}
          {dados.endereco.numero || ''}
          {dados.endereco.numero && dados.endereco.bairro || dados.endereco.numero && dados.endereco.cidade || dados.endereco.numero && dados.endereco.estado ? ", ":''}
          {dados.endereco.bairro || ''}
          {dados.endereco.bairro && dados.endereco.cidade || dados.endereco.bairro && dados.endereco.estado ? ", ":''}
          {dados.endereco.cidade || ''}
          {dados.endereco.cidade && dados.endereco.estado ? " - ":''}
          {dados.endereco.estado  ? dados.endereco.estado : ''}
        </p>
        <p>
          {dados.telefone || ''}
          {dados.telefone && dados.email ? ' • ' : ''}
          {dados.email || ''}
        </p>
        <hr className='mb-5'/>
      </div>

      <div className="mt-3">
        {dados.objetivos ? (
          <ul>
            <h5><li className='mb-2 mt-4'>OBJETIVOS</li></h5>
            <p>{dados.objetivos}</p>
          </ul>
        ):''}
      </div>
      
      <div className="mt-3">
        {dados.resumo ? (
          <ul>
            <h5><li className='mb-2 mt-4'>RESUMO PROFISSIONAL</li></h5>
            <p>{dados.resumo}</p>
          </ul>
        ):''}
      </div>

      <div className="mt-3">
        {dados.formacao && dados.formacao.length > 0 ? (
          <ul>
            <h5><li className='mb-2 mt-4'>FORMAÇÃO ACADEMICA</li></h5>
            {dados.formacao.map((form, index) => (
              <div key={index}>
                <p>
                  {form.curso}
                  {form.instituicao ? " - "+form.instituicao : ''}
                  {form.localizacao ? "("+form.localizacao+")" : ''}
                  {form.conclusao ? " "+form.conclusao : ''}
                </p>
              </div>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>

      <div className="mt-3">
        {dados.experiencias && dados.experiencias.length > 0 ? (
          <ul>
            <h4><li className='mb-2 mt-4'>EXPERIÊNCIAS PROFISSIONAIS</li></h4>
            {dados.experiencias.map((exp, index) => (
              <div key={index}>
                <p className='mb-1'> {exp.empresa} - <strong>{exp.cargo}</strong> | {exp.periodo} </p>
                <p style={{whiteSpace: 'pre-line'}}>Funções: <br/>   <div className='ms-3'>{exp.descricao}</div></p>
              </div>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>

      <div className="mt-3">
        {dados.idiomas && dados.idiomas.length > 0 ? (
          <ul>
            <h4><li className='mb-2 mt-4'>IDIOMAS</li></h4>
            <p>{dados.idiomas.map((idiomas, index) => (
                    <div className="ms-2" key={index}>
                      <p>- {idiomas.idioma} ({idiomas.fluencia}) </p>
                    </div>
                  ))}</p>
          </ul>
        ):''}
      </div>
      
      <div className="mt-3">
        {dados.cursos && dados.cursos.length > 0 || dados.habilidades && dados.habilidades.length > 0 ? 
          <div className='mt-3'>
            <ul>
              <h4><li>INFORMAÇÕES COMPLEMENTARES</li></h4>
              {dados.cursos && dados.cursos.length  > 0 ? (
                <div>
                  <h4>- Cursos</h4>
                  {dados.cursos.map((curs, index) => (
                    <div className='ms-4' key={index}>
                      <p>
                        {curs.curso}
                        {curs.instituicao ? " - "+curs.instituicao : ''}
                        {curs.cargaHoraria && curs.ano ? "("+curs.cargaHoraria+"/"+curs.ano+")" : ''}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p></p>
              )}
              {dados.habilidades && dados.habilidades.length > 0 ? (
                <div>
                  <h4>- Habilidade</h4>
                  {dados.habilidades.map((habilidade, index) => (
                    <p className='ms-4' key={index}>{habilidade}</p>
                  ))}
                </div>
              ) : (
                <p></p>
              )}
            </ul>
          </div> : ''}
        
      </div>

    </div>
  );
};

export default ModeloSimples;