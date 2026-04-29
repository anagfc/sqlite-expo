import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import Saldo from './components/Saldo';
import Lancamento from './components/Lancamento';

const App = () => {
  const [saldo, setSaldo] = useState(0);

  return (
    // Ao colocar uma propriedade no lançamento e não acrescentar valor, ele automaticamente é compreendido como booleano e true
    <View style={styles.container}>
      <Saldo Valor={saldo}/>
      <Lancamento Credito />
      <Lancamento />
    </View>
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