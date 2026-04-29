import React, {useState} from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';
import {useSaldo} from '../contexts/ContaContext';

const Lancamento = (props) => {

  const {saldo, setSaldo} = useSaldo();
  const [valor, setValor] = useState(0);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={valor}
        placeholder="Valor a movimentar"
        keyboardType="numeric"
      />

      <Button
        color={props.Credito ? 'green' : 'darkred'}
        title={props.Credito ? 'Depositar' : 'Sacar'}
        onPress={() => {
          if (props.Credito) {
            setSaldo(saldo + Number(valor));
          } else {
            setSaldo(saldo - Number(valor));
          }
          
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Lancamento;
