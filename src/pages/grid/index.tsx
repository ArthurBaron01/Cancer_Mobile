import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // Importe o Axios

// Defina uma interface para representar a estrutura dos dados dos usuários
interface Paciente {
  id: number;
  nome: string;
  cpf: number;
}

const GridPesquisa = () => {
  const [cadastros, setCadastros] = useState<Paciente[]>([]); // Defina o tipo explícito para cadastros como Paciente[]

  useEffect(() => {
    pesquisarUsuarios();
  }, []);

  const pesquisarUsuarios = async () => {
    try {
      const response = await axios.get('http://192.168.100.5:8080/paciente');
      setCadastros(response.data);
      
    } catch (error) {
      console.error('Erro ao pesquisar usuários:', error);
    }
  };

  const handleRefresh = () => {
    pesquisarUsuarios();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
        <Ionicons name="refresh" size={24} color="black" />
      </TouchableOpacity>
      <FlatList
        data={cadastros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.cpf}>{item.cpf}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cpf: {
    fontSize: 16,
    color: '#666',
  },
  refreshButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default GridPesquisa;
