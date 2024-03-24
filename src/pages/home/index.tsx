import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export const Home = () => {

  function text(text: string){
    return `O texto é: ${text}`;
  }

  const styles = StyleSheet.create({
    componente: {
      backgroundColor: 'red',
      margin: 16,
      padding: 8,
      fontSize: 16,
      borderRadius: 8,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  return(
    <View>
      <Card style={[styles.componente]}>
        <Text style={styles.paragraph}>{ text('Mother Fucker.') }</Text>
      </Card>
    </View>
  );
};
