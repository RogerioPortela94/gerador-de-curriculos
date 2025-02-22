import React from 'react';

interface NacionalidadeProps {
  nacionalidade: string;
  setNacionalidade: React.Dispatch<React.SetStateAction<string>>;
}

const Nacionalidade: React.FC<NacionalidadeProps> = ({ nacionalidade, setNacionalidade }) => {
  return (
    <div className="form-group">
      <label htmlFor="nacionalidade">Nacionalidade:</label>
      <input
        type="nacionalidade"
        id="nacionalidade"
        className="form-control"
        value={nacionalidade}
        onChange={(e) => setNacionalidade(e.target.value)}
      />
    </div>
  );
};

export default Nacionalidade;