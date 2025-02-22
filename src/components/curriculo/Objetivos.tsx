import React from 'react';

interface ObjetivosProps {
  objetivos: string;
  setObjetivos: React.Dispatch<React.SetStateAction<string>>;
}

const Objetivos: React.FC<ObjetivosProps> = ({objetivos, setObjetivos }) => {
  return (
    <div className="form-group text-secondary">
      <label htmlFor="objetivos">Objetivos:</label>
      <textarea
        id="objetivos"
        name='objetivos'
        className="form-control"
        placeholder='Uma breve frase ou parágrafo indicando sua area de interesse ou o cargo desejado.'
        rows={4}
        value={objetivos}
        onChange={(e) => setObjetivos(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Objetivos;