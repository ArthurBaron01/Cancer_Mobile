import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await fetch('http://192.168.100.5:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            senha: password,
          }),
        });

        const data = await response.json();

        if (data) {
          // Login bem-sucedido
          setSnackbarVisible(true);
          setErrorVisible(false);
          navigation.navigate('Home' as never);
        } else {
          // Login falhou
          console.error('Erro ao fazer login:');
          setErrorVisible(true);
          setSnackbarVisible(false);
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        // Trate o erro como desejado
      }
    } else {
      setErrorVisible(true);
      setSnackbarVisible(false);
    }
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: 'white' } }}
        error={errorVisible && !email}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        theme={{ colors: { primary: 'white' } }}
        error={errorVisible && !password}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button onPress={handleCadastro} style={styles.button}>
        Cadastrar
      </Button>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Login realizado com sucesso!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1E90FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});

export default Login;
