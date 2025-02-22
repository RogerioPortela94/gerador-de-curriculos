import { PDFDownloadLink } from '@react-pdf/renderer';
import CurriculoSimplesPDF from './pdf/CurriculoSimplesPDF';

interface GeradorPDFProps {
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

const GeradorPDF = ({ dados, modeloSelecionado }: GeradorPDFProps) => {


  const getModelo = () => {
    switch (modeloSelecionado) {
      case 1:
        return <CurriculoSimplesPDF dados={dados}/>;
      default:
        return <CurriculoSimplesPDF dados={dados}/>;
    }
  };

  return (
    <div>
      <PDFDownloadLink className='text-decoration-none' document={getModelo()} fileName={dados.nome ? `${dados.nome}_curriculo.pdf` : 'curriculo.pdf'}>
        <div className="row d-flex justify-content-center">
          <button className='w-75 btn btn-success mt-3' >Baixar PDF</button>
        </div>
      </PDFDownloadLink>
    </div>
  );
};

export default GeradorPDF;
