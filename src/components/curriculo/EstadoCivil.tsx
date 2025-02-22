import React from 'react';

interface EstadoCivilProps {
  estadoCivil: string;
  setEstadoCivil: React.Dispatch<React.SetStateAction<string>>;
}

const EstadoCivil: React.FC<EstadoCivilProps> = ({ estadoCivil, setEstadoCivil }) => {
  return (
    <div className="form-group text-secondary">
      <label htmlFor="estadoCivil">Estado Civil:</label>
      <input
        type="text"
        id="estadoCivil"
        className="form-control"
        value={estadoCivil}
        onChange={(e) => setEstadoCivil(e.target.value)}
      />
    </div>
  );
};

export default EstadoCivil;