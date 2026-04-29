// Ao usar o valor de saldo dentro do App.js, é usado o hook useState, porém ele é um acesso no contexto local

import React, {useContext, createContext, useState} from 'react';

const saldoContext = createContext(); // 1) Criação do contexto para poder passá-lo para quem estiver abaixo desse contexto. Ele cria um contexto pai que viabiliza acesso a todos os contextos filho (providers)

// O provedor vai fornecer um nível de acesso para tudo que estiver ali dentro. A propriedade children sinaliza isso
export default function SaldoProvider({ children }){

  // Definir o valor a que os filhos terão acesso:
  const [saldo, setSaldo] = useState(0);

  return(

    // Vai passar o valor do saldo e a função que altera a variável
    <saldoContext.Provider
      value={{
        saldo,
        setSaldo
      }}
    >
      {children}
    </saldoContext.Provider>

  );

}

// Define como se fosse o hook para alterar os valores acima
export function useSaldo(){
  const context = useContext(saldoContext);
  const {saldo, setSaldo} = context;

  return {saldo, setSaldo};
}