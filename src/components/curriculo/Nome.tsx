// Componente: Nome.tsx
import React from 'react';

interface NomeProps {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
}

const Nome: React.FunctionComponent<NomeProps> = ({ nome, setNome }) => {
  return (
    <div className="form-group">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        className="form-control"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
};

export default Nome;
