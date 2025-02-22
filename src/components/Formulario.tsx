import React, { useState } from 'react';
import Nome from './curriculo/Nome';
import Email from './curriculo/Email';
import Telefone from './curriculo/Telefone'
import Endereco from './curriculo/Endereco';
import Experiencias from './curriculo/Experiencias';
import Formacao from './curriculo/Formacao';
import Habilidades from './curriculo/Habilidades';
import GerarPDF from './GerarPDF';
import Nacionalidade from './curriculo/Nacionalidade';
import Idade from './curriculo/Idade';
import EstadoCivil from './curriculo/EstadoCivil';
import Objetivos from './curriculo/Objetivos';
import Idiomas from './curriculo/Idiomas';
import Cursos from './curriculo/Cursos';
import Resumo from './curriculo/Resumo';
import Links from './curriculo/Links';



interface FormularioProps {
  onUpdateDados: (dados: any) => void;
  modeloSelecionado: number;
}
const Formulario: React.FC<FormularioProps> = ({ onUpdateDados, modeloSelecionado }) => {
  const [dados, setDados] = useState({
    nome: '',
    nacionalidade: '',
    idade: 0,
    estadoCivil: '',
    email: '',
    telefone: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
    links: [],
    objetivos: '',
    resumo: '',
    habilidades: [],
    experiencias: [],
    formacao: [],
    idiomas: [],
    cursos: [],
  });

  const handleChange = (campo: string, valor: any) => {
    const novosDados = { ...dados, [campo]: valor };
    setDados(novosDados);
    onUpdateDados(novosDados);

  };
  return (
    <div className="container">
      <div className="accordion" id="infomacoes">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#dadosPessoais" aria-expanded="true" aria-controls="dadosPessoais">
              <i className="bi bi-person"></i><div className='ms-2'>Dados Pessoais</div>
            </button>
          </h2>
          <div id="dadosPessoais" className="accordion-collapse collapse show" data-bs-parent="#infomacoes">
            <div className="accordion-body">
              <Nome nome={dados.nome} setNome={(valor) => handleChange('nome', valor)} />
              <div className='row'>
                <div className='col-md'>
                  <Nacionalidade nacionalidade={dados.nacionalidade} setNacionalidade={(valor) => handleChange('nacionalidade', valor)} />
                </div>
                <div className='col-md-4'>
                  <Idade idade={dados.idade} setIdade={(valor) => handleChange('idade', valor)} />
                </div>
              </div>
              <EstadoCivil estadoCivil={dados.estadoCivil} setEstadoCivil={(valor) => handleChange('estadoCivil', valor)} />
              <Email email={dados.email} setEmail={(valor) => handleChange('email', valor)} />
              <Telefone telefone={dados.telefone} setTelefone={(valor) => handleChange('telefone', valor)} />
              <Endereco endereco={dados.endereco} setEndereco={(valor) => handleChange('endereco', valor)} />
              <Links links={dados.links} setLinks={(valor) => handleChange('links', valor)} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#dadosInformacao" aria-expanded="false" aria-controls="dadosInformacao">
            <i className="bi bi-asterisk"></i><div className='ms-2'>Objetivos e Resumo</div>
            </button>
          </h2>
          <div id="dadosInformacao" className="accordion-collapse collapse" data-bs-parent="#infomacoes">
            <div className="accordion-body">
              <Objetivos objetivos={dados.objetivos} setObjetivos={(valor) => handleChange('objetivos', valor)} />
              <div className='mt-2'>
                <Resumo resumo={dados.resumo} setResumo={(valor) => handleChange('resumo', valor)} />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#dadosEducacao" aria-expanded="false" aria-controls="dadosEducacao">
              <i className="bi bi-book"></i><div className='ms-2'>Educação</div>
            </button>
          </h2>
          <div id="dadosEducacao" className="accordion-collapse collapse " data-bs-parent="#infomacoes">
            <div className="accordion-body">
              <Formacao formacoes={dados.formacao} setFormacao={(valor) => handleChange('formacao', valor)} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dadosExperiencia" aria-expanded="false" aria-controls="dadosExperiencia">
              <i className="bi  bi-archive"></i><div className='ms-2'> Experiência Profissionais</div>
            </button>
          </h2>
          <div id="dadosExperiencia" className="accordion-collapse collapse" data-bs-parent="#infomacoes">
            <div className="accordion-body">
              <Experiencias experiencias={dados.experiencias} setExperiencias={(valor) => handleChange('experiencias', valor)} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#dadosAdicional" aria-expanded="false" aria-controls="dadosAdicional">
              <i className="bi  bi-star"></i><div className='ms-2'> Adicional</div>
            </button>
          </h2>
          <div id="dadosAdicional" className="accordion-collapse collapse" data-bs-parent="#infomacoes">
            <div className="accordion-body">
              <Habilidades habilidades={dados.habilidades} setHabilidades={(valor) => handleChange('habilidades', valor)} />
              <Cursos cursos={dados.cursos} setCursos={(valor) => handleChange('cursos', valor)} />
              <Idiomas idiomas={dados.idiomas} setIdiomas={(valor) => handleChange('idiomas', valor)} />
            </div>
          </div>
        </div>
      </div>
      <GerarPDF dados={dados} modeloSelecionado={modeloSelecionado} />

    </div>
  );
};

export default Formulario;