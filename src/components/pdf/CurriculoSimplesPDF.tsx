import React from 'react';
import { Font, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Times New Roman',
  fonts: [
    { src: '/fonts/TimesNewRoman-Regular.ttf' }, 
    { src: '/fonts/TimesNewRoman-Bold.ttf', fontWeight: 'bold' }, 
    { src: '/fonts/TimesNewRoman-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/TimesNewRoman-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' }, 
  ],
});

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: 'Times New Roman',
  },
  section: {
    marginBottom: 5,
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
});

interface ModeloProps {
  dados: {
    nome: string;
    nacionalidade: string;
    idade: number;
    estadoCivil: string;
    email: string;
    telefone: string;
    endereco: {
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

const renderDadosPessoais = (nacionalidade: string, estadoCivil: string, idade: number) => {
  const dadosPessoais = [nacionalidade, estadoCivil, idade].filter(Boolean).join(" • ");
  return (<Text> {dadosPessoais}</Text>);
}
const renderEndereco = (rua: string, numero: string, bairro: string, cidade: string, uf: string) => {
  const endereco = [rua, numero, bairro, cidade && uf ? `${cidade} - ${uf}` : cidade || uf].filter(Boolean).join(", ");
  return (<Text>{endereco}</Text>)
}
const renderObjetivos = (objetivos: string) => {
  if (!objetivos){
    return null;
  }else{
    return (
      <>
      <Text style={styles.subTitle}><Text style={{flexDirection: 'row', marginLeft: 10,}}> •</Text><Text> OBJETIVOS</Text></Text><br/>
      <Text style={styles.text}>{objetivos}</Text>
      </>
    )
  }
}

const renderResumo = (resumo: string) => {
  if (!resumo){
    return null;
  }else{
    return (
      <>
        <Text style={styles.subTitle}><Text style={{flexDirection: 'row', marginLeft: 10,}}> •</Text><Text> RESUMO PROFISSIONAL</Text></Text>
        <Text style={styles.text}>{resumo}</Text>
      </>
    )
  }
}

const renderFormacao = (formacao: {curso: string, instituicao: string, localizacao: string, conclusao: string}[]) =>{
  
  if(formacao.length > 0){
    return (
      <>
        <Text style={styles.subTitle}><Text style={{ flexDirection: 'row', marginLeft: 10 }}>• </Text> FORMAÇÃO ACADÊMICA</Text>
        {formacao.map((form, index) => (
          <Text key={index} style={styles.text}>
            {form.curso} - {form.instituicao} ({form.localizacao}) {form.conclusao}
          </Text>
        ))}
      </>
    )
  }else {
    return null;
  }
}


const CurriculoSimplesPDF: React.FC<ModeloProps> = ({ dados }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>{(dados.nome || 'NOME COMPLETO').toUpperCase()}</Text>
          {renderDadosPessoais(dados.nacionalidade, dados.estadoCivil, dados.idade)}
          {renderEndereco(dados.endereco.rua, dados.endereco.numero, dados.endereco.bairro, dados.endereco.cidade, dados.endereco.estado)}

          <Text>{dados.telefone} {dados.telefone && dados.email ? ' • ' : ''} {dados.email}</Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', marginVertical: 10, marginBottom: 10, }} />

        {/* Objetivos */}
        <View style={styles.section}>
          {renderObjetivos(dados.objetivos)}
        </View>
        

        {/* Resumo Profissional */}
        <View style={styles.section}>
          {renderResumo(dados.resumo)}
        </View>


        {/* Formação Acadêmica */}
        <View style={styles.section}>
          {renderFormacao(dados.formacao)}
        </View>
        

        {/* Experiências Profissionais */}
        {dados.experiencias.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.subTitle}><Text style={{ flexDirection: 'row', marginLeft: 10 }}>• </Text> EXPERIÊNCIAS PROFISSIONAIS</Text>
            {dados.experiencias.map((exp, index) => (
              <View key={index}>
                <Text style={styles.text}>{exp.empresa} - <Text style={{ fontWeight: 'bold' }}>{exp.cargo}</Text> | {exp.periodo}</Text>
                <Text style={styles.text}>Funções: </Text>
                {exp.descricao.split("\n").map((linha, index) => (
                  <Text key={index} style={styles.listItem}>
                    {linha}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ) : ''}

        {/* Idiomas */}
        {dados.idiomas.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subTitle}><Text style={{ flexDirection: 'row', marginLeft: 10 }}>• </Text> IDIOMAS</Text>
            {dados.idiomas.map((idioma, index) => (
              <Text key={index} style={styles.listItem}>- {idioma.idioma} ({idioma.fluencia})</Text>
            ))}
          </View>
        )}

        {/* Informações Complementares */}
        {(dados.cursos.length > 0 || dados.habilidades.length > 0) && (
          <View style={styles.section}>
            <Text style={styles.subTitle}><Text style={{ flexDirection: 'row', marginLeft: 10 }}>• </Text> INFORMAÇÕES COMPLEMENTARES</Text>

            {/* Cursos */}
            {dados.cursos.length > 0 && (
              <View style={styles.listItem}>
                <Text style={styles.text}> - Cursos:</Text>
                {dados.cursos.map((curso, index) => (
                  <Text key={index} style={styles.text}>
                    {curso.curso} - {curso.instituicao} ({curso.cargaHoraria} horas / {curso.ano})
                  </Text>
                ))}
              </View>
            )}

            {/* Habilidades */}
            {dados.habilidades.length > 0 && (
              <View style={styles.listItem}>
                <Text style={styles.text}> - Habilidades:</Text>
                {dados.habilidades.map((habilidade, index) => (
                  <Text key={index} style={styles.text}>{habilidade}</Text>
                ))}
              </View>
            )}
          </View>
        )}

      </Page>
    </Document>
  );
};

export default CurriculoSimplesPDF;

/*

export const CurriculoSimplesPDFPDF = (doc: jsPDF, dados: any) => {
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getTextWidth((dados.nome || 'NOME COMPLETO').toUpperCase());
    const textInicio = doc.getTextWidth((dados.nacionalidade || '')+
                                        (dados.nacionalidade  && dados.estadoCivil ? ' • ' : '')+
                                        (dados.estadoCivil || '')+
                                        (dados.estadoCivil && dados.idade || dados.idade && dados.nacionalidade ? ' • ' : '')+
                                        (dados.idade ? dados.idade + ' anos' : ''));
    
    doc.setFontSize(22);
    doc.text((dados.nome || 'NOME COMPLETO').toUpperCase(), (pageWidth - textWidth)/2, 20)
    
    doc.setFontSize(12);
    doc.text(( 
        (dados.nacionalidade || '')+
        (dados.nacionalidade  && dados.estadoCivil ? ' • ' : '')+
        (dados.estadoCivil || '')+
        (dados.estadoCivil && dados.idade || dados.idade && dados.nacionalidade ? ' • ' : '')+
        (dados.idade ? dados.idade + ' anos' : '')
    ), (pageWidth-textInicio) / 2 , 35);
    doc.text(`Email: ${dados.email || 'N/A'}`, 10, 45);

    doc.text('Habilidades:', 10, 40);
    if (dados.habilidades && dados.habilidades.length > 0) {
      dados.habilidades.forEach((habilidade: string, index: number) => {
        doc.text(`- ${habilidade}`, 10, 50 + index * 10);
      });
    } else {
      doc.text('Nenhuma habilidade informada', 10, 50);
    }

    const experienciasStartY = 60 + (dados.habilidades?.length || 0) * 10;
    doc.text('Experiências Profissionais:', 10, experienciasStartY);
    if (dados.experiencias && dados.experiencias.length > 0) {
      dados.experiencias.forEach((exp: any, index: number) => {
        const startY = experienciasStartY + 10 + index * 20;
        doc.text(`Empresa: ${exp.empresa}`, 10, startY);
        doc.text(`Cargo: ${exp.cargo}`, 10, startY + 10);
        doc.text(`Período: ${exp.periodo}`, 10, startY + 20);
        doc.text(`Descrição: ${exp.descricao}`, 10, startY + 30);
      });
    } else {
      doc.text('Nenhuma experiência informada', 10, experienciasStartY + 10);
    }

    doc.save('curriculo.pdf');
}*/