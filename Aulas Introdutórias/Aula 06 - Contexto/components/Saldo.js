import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useSaldo} from '../contexts/ContaContext';

const Saldo = (props) => {

  // É preciso puxar o valor de saldo do contexto:
  const {saldo} = useSaldo();

  return(
    <Text style={styles.texto}> Saldo: {saldo} </Text>
  );

};

const styles = StyleSheet.create({
  texto:{
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'bold'
  }

});

export default Saldo;