import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const CustomCadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    const handleSignUp = () => {
        // Validação dos campos de cadastro
        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage('Todos os campos são obrigatórios.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }

        // Aqui você pode adicionar a lógica para registrar o usuário
        // Em vez de setar a mensagem de erro, você pode redirecionar o usuário para outra tela ou mostrar uma mensagem de sucesso

        // Reset dos campos
        navigation.navigate('Home' as never);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Button title="Cadastrar e Entrar" onPress={handleSignUp} color="#1E90FF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#c5b2ec', // Fundo roxo claro
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white', // Cor do título
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'white', // Cor do campo de entrada
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export { CustomCadastro };
