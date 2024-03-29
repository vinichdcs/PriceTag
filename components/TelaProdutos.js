import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import firebase from '../config/Firebase';

const TelaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const produtosSnapshot = await firebase.database().ref('produtos').once('value');
        const produtosData = produtosSnapshot.val();
        if (produtosData) {
          const produtosArray = Object.keys(produtosData).map((key) => ({
            id: key,
            ...produtosData[key],
          }));
          setProdutos(produtosArray);
        }
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    };

    carregarProdutos();
  }, []);

  const handleExcluirProduto = async () => {
    try {
      await firebase.database().ref('produtos').child(produtoSelecionado.id).remove();
      const produtosAtualizados = produtos.filter((produto) => produto.id !== produtoSelecionado.id);
      setProdutos(produtosAtualizados);
      setProdutoSelecionado(null);
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  const handleSelecionarProduto = (produto) => {
    setProdutoSelecionado(produto);
  };

  const confirmarExclusao = () => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza de que deseja excluir este produto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: handleExcluirProduto,
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, item.id === (produtoSelecionado && produtoSelecionado.id) && styles.selecionado]}
      onPress={() => handleSelecionarProduto(item)}
    >
      <Text style={styles.texto}>{`Nome do Comércio: ${item.nomeComercio}`}</Text>
      <Text style={styles.texto}>{`Nome do Produto: ${item.nomeProduto}`}</Text>
      {item.id === (produtoSelecionado && produtoSelecionado.id) && (
        <TouchableOpacity
          style={styles.botaoExcluir}
          onPress={confirmarExclusao}
        >
          <Text style={styles.textoBotaoExcluir}>Excluir</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {produtos.length === 0 ? (
        <Text style={styles.texto}>Não há produtos cadastrados.</Text>
      ) : (
        <FlatList
          data={produtos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    backgroundColor: '#fafafa',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
  },
  selecionado: {
    backgroundColor: '#007bff',
  },
  texto: {
    fontSize: 16,
  },
  botaoExcluir: {
    backgroundColor: '#dc3545',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  textoBotaoExcluir: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TelaProdutos;
