import React from 'react';

interface IdadeProps {
  idade: number;
  setIdade: React.Dispatch<React.SetStateAction<number>>;
}

const Idade: React.FC<IdadeProps> = ({ idade, setIdade }) => {
  return (
    <div className="form-group">
      <label htmlFor="Idade">Idade:</label>
      <input
        type="number"
        id="Idade"
        className="form-control"
        value={idade}
        onChange={(e) => setIdade(e.target.valueAsNumber)}
      />
    </div>
  );
};

export default Idade;