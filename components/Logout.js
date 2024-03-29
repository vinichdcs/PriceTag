import React, { useEffect, useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const Logout = ({ navigation }) => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await auth().signOut();
        
        setNomeComercio("");
        setNomeProduto("");
        setCategoriaProduto("");
        setMarcaProduto("");
        setUnidadeMedida("");
        setValorProduto("");
        setDataValidade("");
        navigation.navigate("TelaLogin");
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      }
    };

    handleLogout();
  }, []);


  const [nomeComercio, setNomeComercio] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [categoriaProduto, setCategoriaProduto] = useState("");
  const [marcaProduto, setMarcaProduto] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [dataValidade, setDataValidade] = useState("");

  return (
    <View>
      {}
      <TextInput
        placeholder="Nome do Comércio"
        onChangeText={setNomeComercio}
        value={nomeComercio}
      />
      <TextInput
        placeholder="Nome do Produto"
        onChangeText={setNomeProduto}
        value={nomeProduto}
      />
      <TextInput
        placeholder="Categoria do Produto"
        onChangeText={setCategoriaProduto}
        value={categoriaProduto}
      />
      <TextInput
        placeholder="Marca do Produto"
        onChangeText={setMarcaProduto}
        value={marcaProduto}
      />
      <TextInput
        placeholder="Unidade de Medida em Kg ou L"
        onChangeText={setUnidadeMedida}
        value={unidadeMedida}
      />
      <TextInput
        placeholder="Valor do Produto"
        onChangeText={setValorProduto}
        value={valorProduto}
      />
      <TextInput
        placeholder="Data de Validade"
        onChangeText={setDataValidade}
        value={dataValidade}
      />
    </View>
  );
}

export default Logout;
