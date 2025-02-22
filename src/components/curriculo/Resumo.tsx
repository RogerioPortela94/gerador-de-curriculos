import React from 'react';

interface ResumoProps {
  resumo: string;
  setResumo: React.Dispatch<React.SetStateAction<string>>;
}

const Resumo: React.FC<ResumoProps> = ({resumo, setResumo }) => {
  return (
    <div className="form-group">
      <label htmlFor="resumo">Resumo Profissional:</label>
      <textarea
        id="resumo"
        name='resumo'
        className="form-control"
        placeholder='Um resumo curto destacando suas principais experiências, habilidades e resultados relevantes para vaga.'
        rows={4}
        value={resumo}
        onChange={(e) => setResumo(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Resumo;