import './Evento.css';

export default function Evento({texto, children}) {
    return (
        <div className="Evento" onClick={() => alert(texto)}>
            <div className='card'>

                <div>
                    <h1>Button Card</h1>
                    <p>Clique nos botões abaixo</p>
                </div>

                <form>
                    <input>Digite seu nome</input>
                    <button onClick={e => {e.stopPropagation(); alert(texto)}}>
                        {children}
                    </button>
                </form>

            </div>
        </div>
    );
}
