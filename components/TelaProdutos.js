import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, TextInput, Modal } from 'react-native';
import firebase from '../config/Firebase';

const TelaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [produtoEditado, setProdutoEditado] = useState({
    nomeComercio: '',
    endereco: '',
    nomeProduto: '',
    categoriaProduto: '',
    marcaProduto: '',
    unidadeMedida: '',
    valorProduto: ''
  });

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
      Alert.alert('Sucesso', 'Produto excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  const handleSelecionarProduto = (produto) => {
    if (produtoSelecionado && produtoSelecionado.id === produto.id) {
      setProdutoSelecionado(null);
    } else {
      setProdutoSelecionado(produto);
    }
  };

  const handleAbrirModal = () => {
    setProdutoEditado(produtoSelecionado);
    setModalVisible(true);
  };

  const handleConfirmarAlteracao = () => {
    Alert.alert(
      'Confirmar Alteração',
      'Tem certeza de que deseja alterar este produto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Alterar',
          onPress: handleAlterarProduto,
        },
      ],
      { cancelable: false }
    );
  };

  const handleAlterarProduto = async () => {
    try {
      await firebase.database().ref('produtos').child(produtoSelecionado.id).update(produtoEditado);
      const produtosAtualizados = produtos.map((produto) =>
        produto.id === produtoSelecionado.id ? { id: produtoSelecionado.id, ...produtoEditado } : produto
      );
      setProdutos(produtosAtualizados);
      setProdutoSelecionado({ id: produtoSelecionado.id, ...produtoEditado });
      setModalVisible(false);
      Alert.alert('Sucesso', 'Produto alterado com sucesso!');
    } catch (error) {
      console.error('Erro ao alterar o produto:', error);
    }
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
        <View>
          <Text style={styles.texto}>{`Endereço: ${item.endereco}`}</Text>
          <Text style={styles.texto}>{`Categoria do Produto: ${item.categoriaProduto}`}</Text>
          <Text style={styles.texto}>{`Marca do Produto: ${item.marcaProduto}`}</Text>
          <Text style={styles.texto}>{`Unidade de Medida: ${item.unidadeMedida}`}</Text>
          <Text style={styles.texto}>{`Valor do Produto: ${item.valorProduto}`}</Text>
          <TouchableOpacity
            style={styles.botaoExcluir}
            onPress={confirmarExclusao}
          >
            <Text style={styles.textoBotaoExcluir}>Excluir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoAlterar}
            onPress={handleAbrirModal}
          >
            <Text style={styles.textoBotaoAlterar}>Alterar</Text>
          </TouchableOpacity>
        </View>
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

      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Nome do Comércio"
              onChangeText={(text) => setProdutoEditado({ ...produtoEditado, nomeComercio: text })}
              value={produtoEditado.nomeComercio}
            />
            <TextInput
              style={styles.input}
              placeholder="Endereço"
              onChangeText={(text) => setProdutoEditado({ ...produtoEditado, endereco: text })}
              value={produtoEditado.endereco}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome do Produto"
              onChangeText={(text) => setProdutoEditado({ ...produtoEditado, nomeProduto: text })}
              value={produtoEditado.nomeProduto}
            />
            <TextInput
              style={styles.input}
              placeholder="Categoria do Produto"
              onChangeText={(text) => setProdutoEditado({ ...produtoEditado, categoriaProduto: text })}
              value={produtoEditado.categoriaProduto}
            />
            <TextInput
              style={styles.input}
              placeholder="Marca do Produto"
              onChangeText={(text) => setProdutoEditado({ ...produtoEditado, marcaProduto: text })}
              value={produtoEditado.marcaProduto}
            />
            <TextInput
              style={styles.input}
              placeholder="Unidade de Medida"
              onChangeText={(text) => setProdutoEditado({ ...produtoEditado, unidadeMedida: text })}
              value={produtoEditado.unidadeMedida}
            />
            <TextInput
              style={styles.input}
              placeholder="Valor do Produto"
              onChangeText={(text) => setProdutoEditado({ ...produtoEditado, valorProduto: text })}
              value={produtoEditado.valorProduto}
            />
            <TouchableOpacity
              style={[styles.botaoExcluir, styles.botaoAlterar]}
              onPress={handleConfirmarAlteracao}
            >
              <Text style={styles.textoBotaoAlterar}>Salvar Alterações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  botaoAlterar: {
    backgroundColor: '#ffc107',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  textoBotaoAlterar: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botaoCancelar: {
    backgroundColor: '#6c757d',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  textoBotaoCancelar: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TelaProdutos;

