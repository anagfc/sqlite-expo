import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

import Container from './../components/Container'; // Importação do Container criado dentro dos componentes

import Header from './../components/Header'; // Importação do Header criado dentro dos componentes

import Body from './../components/Body'; // Importação do Body criado dentro dos componentes

import Input from './../components/Input';

const Calculadora = () => {
  const [gas, setGas] = React.useState('');
  const [etanol, setEtanol] = React.useState('');
  const [resposta, setResposta] = React.useState('');

  const handleCalcular = () => {
    // Validação das entradas
    if (!gas || gas <= 0 || ! etanol || etanol <= 0) {
      Alert.alert('Atenção!', 'É obrigatório inserir um preço válido para a gasolina e para o etanol.')
    } else {
      let pct = Math.round((etanol/gas)*100); // Para ficar em porcentagem e arredondado
      if (pct < 70) {
        setResposta("O etanol está custando " + pct + "% o valor da gasolina. Abasteça com etanol!")
      } else {
        setResposta("O etanol está custando " + pct + "% o valor da gasolina. Abasteça com gasolina!")
      }
    } 

  }

  return (
    <Container>
      <Header title="Calculadora Flex"/>
      
      <Body>
        <Input
          label="Preço da gasolina"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />

        <Input
          label="Preço do etanol"
          value={etanol}
          onChangeText={(text) => setEtanol(text)}
        />

        <Button mode="contained" onPress={handleCalcular}>
          Calcular
        </Button>

        <Text style={styles.texto}>{resposta}</Text>

      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Calculadora;
