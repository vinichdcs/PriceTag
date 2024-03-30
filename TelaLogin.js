import React, { useState, useCallback } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import firebase from '../config/Firebase';

const backgroundImg = require('../Assets/mercado10.png');

const TelaLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNovaConta = () => {
    navigation.navigate('NovoCliente'); 
  };

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, senha); 
      console.log('Usuário logado:', userCredential.user.email);
      navigation.navigate('TelaCadastro'); 
    } catch (error) {
      console.error('Erro durante o login:', error);
      let errorMessage = '';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Usuário não cadastrado. Crie uma nova conta.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Senha incorreta. Verifique sua senha.';
      } else {
        errorMessage = 'Ocorreu um erro durante o login.';
      }
      Alert.alert('Erro', errorMessage);
    }
  };

  
  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setSenha('');
    }, [])
  );

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Tela de Login</Text>
        <View style={styles.inputContainer}>
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
            style={styles.input}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNovaConta}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003761',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#003761',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: 300,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#003761',
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

export default TelaLogin;
