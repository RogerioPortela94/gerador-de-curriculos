import React from 'react';

interface TelefoneProps {
  telefone: string;
  setTelefone: (telefone: string) => void;
}

const Telefone: React.FC<TelefoneProps> = ({ telefone, setTelefone }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setTelefone(telefoneFormatado(value));
  };

  const telefoneFormatado = (value: string) => {

    if (value.length <= 2) {
      return `(${value}`; // Adiciona o parêntese inicial
    } else if (value.length <= 6) {
      return `(${value.slice(0, 2)}) ${value.slice(2)}`; // Formata com DDD parcial
    } else if (value.length <= 10) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`; // Formata telefone fixo
    } else {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`; // Formata celular
    }
  };

  return (
    <div className="form-group text-secondary">
      <label htmlFor="telefone">Telefone:</label>
      <input
        type="tel"
        id="telefone"
        name="telefone"
        className="form-control"
        placeholder="Digite seu telefone ou celular"
        value={telefone}
        onChange={handleChange}
        maxLength={15} 
      />
    </div>
  );
};

export default Telefone;
