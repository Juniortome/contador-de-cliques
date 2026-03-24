import { useState } from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);

    const incrementarContador = () => {
        setCount(prevCount => prevCount + 1);
        console.log("Incrementado!");
    };

    // Nova função para zerar o estado
    const resetarContador = () => {
        setCount(0);
        console.log("Contador zerado!");
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            <h1>Contador: {count}</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {/*Botão de adicionar*/}
                <button
                    onClick={incrementarContador}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Adicionar
                </button>

                {/*Botão de zerar*/}
                <button
                    onClick={resetarContador}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        cursor: 'pointer',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    Zerar
                </button>
            </div>
        </div>
    );
};

export default Contador;