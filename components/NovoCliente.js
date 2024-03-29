import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import firebase from '../config/Firebase';

const NovoCliente = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (!email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'A senha e a confirmação de senha não correspondem.');
      return;
    }

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, senha);
      
      console.log('Novo usuário criado:', userCredential.user.email);
      
      navigation.navigate('TelaLogin');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao criar nova conta. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={text => setSenha(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={text => setConfirmarSenha(text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003761',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#d58500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d58500',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: 250,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#d58500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NovoCliente;
