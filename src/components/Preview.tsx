import React from 'react';
import ModeloSimples from './modelos/ModeloSimples';

interface PreviewProps {
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
  modeloSelecionado: number;
}

const Preview: React.FC<PreviewProps> = ({ dados, modeloSelecionado }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      <h3>Pré-visualização</h3>
      {modeloSelecionado === 1 && <ModeloSimples dados = {dados}/>}
    </div>
  );
};

export default Preview;