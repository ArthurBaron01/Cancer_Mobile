import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const CadastroPaciente = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();

    const handleSignUp = () => {
        // Validação dos campos de cadastro
        if (!name || !email || !cpf || !birthDate) {
            setErrorMessage('Todos os campos são obrigatórios.');
            return;
        }

        // Aqui você pode adicionar a lógica para registrar o paciente
        // Em vez de setar a mensagem de erro, você pode redirecionar o usuário para outra tela ou mostrar uma mensagem de sucesso

        // Reset dos campos
        navigation.navigate('Home' as never);
        setName('');
        setEmail('');
        setCpf('');
        setBirthDate('');
        setErrorMessage('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Paciente</Text>
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
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
                keyboardType="numeric" // Define o teclado numérico para o campo CPF
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento (DD/MM/AAAA)"
                value={birthDate}
                onChangeText={setBirthDate}
                keyboardType="numeric" // Define o teclado numérico para a data de nascimento
            />
            <Button title="Cadastrar" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0', // Cor de fundo
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Cor do título
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff', // Cor do campo de entrada
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default CadastroPaciente;
