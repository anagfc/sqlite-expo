import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import Saldo from './components/Saldo';
import Lancamento from './components/Lancamento';
import SaldoProvider from './contexts/ContaContext';

const App = () => {

  return (
    // Não é mais necessário estabelecer o valor de saldo, pois agora ele vem do contexto. Não precisa vir em parâmetro e nem em variável
    <SaldoProvider>
      <View style={styles.container}>
        <Saldo />

        <Lancamento Credito />
        <Lancamento />
        
      </View>
    </SaldoProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20
  }
  
});

export default App;