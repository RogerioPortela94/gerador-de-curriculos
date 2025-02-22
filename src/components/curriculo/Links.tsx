import { useState } from "react";

interface Link {
    url: string;
    tipo: string;
}

interface LinksProps {
    links: Link[];
    setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}

const Links: React.FC<LinksProps> = ({ links, setLinks }) => {
    const [novoLink, setNovoLink] = useState<Link>({
        url: '',
        tipo: '',
    });

    const adicionarLink = () => {
        if (novoLink.url && novoLink.tipo) {
            setLinks([...links, novoLink]);
            setNovoLink({ url: '', tipo: '' });
        }
    };
    const removerLink = (index: number) => {
        const novoLink = links.filter((_, i) => i !== index);
        setLinks(novoLink);
    };

    return (
        <div className="form-group mb-4 mt-2">
            <label>Links:</label>
            <div className="my-2">
                {links.map((link, index) => (
                    <div className='row' key={index}>
                        <div className="col-md">
                            <div><strong>{link.tipo}:</strong> {link.url}</div>
                        </div>
                        <div className="col col-sm-1 me-2 align-content-end">
                            <a className="text-decoration-none text-black" onClick={() => removerLink(index)} >
                                <i className="bi bi-trash3"></i>
                            </a>
                        </div>


                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <div className="row">
                    <div className="col-md">
                        <input
                            type="text"
                            value={novoLink.url}
                            onChange={(e) => setNovoLink({ ...novoLink, url: e.target.value })}
                            placeholder="Digite o link"
                            className="form-control mb-2"
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            value={novoLink.tipo}
                            onChange={(e) => setNovoLink({ ...novoLink, tipo: e.target.value })}
                            className="form-control"
                        >
                            <option>Selecione...</option>
                            <option>Portfólio</option>
                            <option>LinkedIn</option>
                            <option>Git-Hub</option>
                        </select>
                    </div>
                </div>

                <button onClick={adicionarLink} className="btn-color">
                    Adicionar
                </button>
            </div>
        </div>
    );
};

export default Links;