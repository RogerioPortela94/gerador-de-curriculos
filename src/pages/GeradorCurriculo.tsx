import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Formulario from '../components/Formulario';
import Preview from '../components/Preview';


const GeradorCurriculo: React.FC = () => {
  const location = useLocation();
  const modeloSelecionado = location.state?.modeloSelecionado || 1;
  
  const [dadosCurriculo, setDadosCurriculo] = useState({
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
      estado:'',
    },
    links: [],
    objetivos: '',
    resumo: '',
    experiencias: [],
    formacao: [],
    habilidades: [],
    idiomas: [],
    cursos: [],
  });

  const handleUpdateDados = (dados: any) => {
    setDadosCurriculo(dados);
  };


  return (
    <div className="container mt-4 d-flex">
      <div style={{ flex: 1 }}>
          <Formulario onUpdateDados={handleUpdateDados} modeloSelecionado={modeloSelecionado}/>
      </div>
      <div className='d-none d-md-block' style={{ flex: 1, marginLeft: '20px' }}>
        <Preview dados={dadosCurriculo} modeloSelecionado={modeloSelecionado} />
      </div>
    </div>
  );
};

export default GeradorCurriculo;
