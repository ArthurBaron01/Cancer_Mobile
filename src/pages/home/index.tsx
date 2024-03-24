import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { Card, List, IconButton } from "react-native-paper";

export const Home = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false); 
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
            <List.Item
              title="Opção 1"
              onPress={() => handleOptionPress("Opção 1")}
            />
            <List.Item
              title="Opção 2"
              onPress={() => handleOptionPress("Opção 2")}
            />
          </View>
        </View>
      </Modal>

      {/* Conteúdo principal */}
      <Card style={styles.componente}>
        <Text style={styles.paragraph}>
          {selectedOption
            ? `Você selecionou: ${selectedOption}`
            : "Nenhuma opção selecionada"}
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
    backgroundColor: "red",
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
    width: "50%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
