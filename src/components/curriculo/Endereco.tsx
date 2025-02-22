interface EnderecoProps {
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  setEndereco: (endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  }) => void;
}
const estadosBrasileiros = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const Endereco: React.FC<EnderecoProps> = ({ endereco, setEndereco }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEndereco({ ...endereco, [name]: value });
  };
  

  return (
    <div className="form-group text-secondary">
      <label>Endereço:</label>
      <div className="row">
        <div className="col-md">
          <input
            type="text"
            name="rua"
            className="form-control mb-2"
            placeholder="Logradouro"
            value={endereco.rua || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="numero"
            className="form-control mb-2"
            placeholder="Número"
            value={endereco.numero  || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <input
            type="text"
            name="bairro"
            className="form-control mb-2"
            placeholder="Bairro"
            value={endereco.bairro || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            name="cidade"
            className="form-control mb-2"
            placeholder="Cidade"
            value={endereco.cidade  || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <select
            id="estado"
            name="estado"
            className="form-control"
            value={endereco.estado  || ""}
            onChange={handleChange}
          >
          <option value="">UF</option>
            {estadosBrasileiros.map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Endereco;