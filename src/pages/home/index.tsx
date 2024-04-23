import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { Card, List, IconButton } from "react-native-paper";
import { useNavigation } from '@react-navigation/native'; // Importar o hook de navegação

export const Home = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigation = useNavigation(); // Inicializar o hook de navegação

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
    if (option === "Cadastrar Paciente") {
      // Navegar para a tela Cadastro se a "Cadastrar Paciente" for selecionada
      navigation.navigate('CadastroPaciente' as never);
    } else if (option === "Logout") {
      // Implemente a navegação de volta para a tela de login ou a tela inicial do aplicativo
      navigation.navigate('Login' as never); // Supondo que 'Login' seja o nome da tela de login
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de menu */}
      <IconButton
        icon="menu"
        onPress={() => setShowOptions(true)}
        style={styles.menuButton}
      />

      {/* Modal para exibir as opções */}
      <Modal
        visible={showOptions}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowOptions(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionPress("Cadastrar Paciente")}
            >
              <Text style={styles.optionText}>Cadastrar Paciente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionPress("Logout")}
            >
              <Text style={styles.optionText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Conteúdo principal */}
      <Card style={styles.componente}>
        <Text style={styles.paragraph}>
        Bem-Vindo
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  componente: {
    backgroundColor: "#c5b2ec",
    margin: 16,
    padding: 8,
    fontSize: 16,
    borderRadius: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  optionContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  optionButton: {
    backgroundColor: "#8a2be2",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
