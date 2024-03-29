import React, { useState } from 'react';
import { ScrollView, TextInput, View, Alert, Image, TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-paper';
import firebase from '../config/Firebase';
import { styles } from './Utils';
import { logout } from '../config/Firebase';
import { TextInputMask } from 'react-native-masked-text';

export default function TelaCadastro({ navigation }) {
  const [nomeComercio, setNomeComercio] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [categoriaProduto, setCategoriaProduto] = useState("");
  const [marcaProduto, setMarcaProduto] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [dataValidade, setDataValidade] = useState("");

  const handleCadastrarProduto = async () => {
    try {
      await firebase.database().ref('produtos').push({
        nomeComercio,
        nomeProduto,
        categoriaProduto,
        marcaProduto,
        unidadeMedida,
        valorProduto,
        dataValidade
      });
      limparCampos();
      navigation.navigate('TelaProdutos');
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar o produto:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar o produto. Por favor, tente novamente.');
    }
  }

  const limparCampos = () => {
    setNomeComercio("");
    setNomeProduto("");
    setCategoriaProduto("");
    setMarcaProduto("");
    setUnidadeMedida("");
    setValorProduto("");
    setDataValidade("");
  }

  const formatarData = (input) => {
    const cleaned = input.replace(/\D/g, '');

    if (cleaned.length <= 2) {
      return cleaned;
    }
    if (cleaned.length <= 4) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../Assets/mercado.jpg')}
          style={styles.image}
        />
      </View>
      <Card style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Comércio"
          onChangeText={setNomeComercio}
          value={nomeComercio}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          onChangeText={setNomeProduto}
          value={nomeProduto}
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria do Produto"
          onChangeText={setCategoriaProduto}
          value={categoriaProduto}
        />
        <TextInput
          style={styles.input}
          placeholder="Marca do Produto"
          onChangeText={setMarcaProduto}
          value={marcaProduto}
        />
        <TextInput
          style={styles.input}
          placeholder="Unidade de Medida em Kg ou L"
          onChangeText={setUnidadeMedida}
          value={unidadeMedida}
        />
        <TextInputMask
          style={styles.input}
          placeholder="Valor do Produto"
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$ ',
            suffixUnit: ''
          }}
          value={valorProduto}
          onChangeText={setValorProduto}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Validade (DD/MM/AAAA)"
          onChangeText={(text) => setDataValidade(formatarData(text))}
          value={dataValidade}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007bff' }]}
          onPress={handleCadastrarProduto}
          disabled={!nomeComercio || !nomeProduto || !categoriaProduto || !marcaProduto || !unidadeMedida || !valorProduto || !dataValidade}
        >
          <Text style={styles.buttonText}>Cadastrar Produto</Text>
        </TouchableOpacity>

        {}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red', marginTop: 10 }]}
          onPress={() => {
            logout();
            navigation.navigate('TelaLogin');
            
            setNomeComercio("");
            setNomeProduto("");
            setCategoriaProduto("");
            setMarcaProduto("");
            setUnidadeMedida("");
            setValorProduto("");
            setDataValidade("");
          }}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}
