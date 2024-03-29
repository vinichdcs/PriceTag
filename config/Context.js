import React, { useState, createContext } from 'react';

export const DataContext = createContext();

const Context = ({ children }) => {
  const [salvarProduto, setSalvarProduto] = useState([]);
  const [nomeComercio, setNomeComercio] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);

  return (
    <DataContext.Provider value={{
      salvarProduto,
      setSalvarProduto,
      nomeComercio,
      setNomeComercio,
      nomeProduto,
      setNomeProduto,
      camposPreenchidos,
      setCamposPreenchidos
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;
