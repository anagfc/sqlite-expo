import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Saldo = (props) => {

  return(
    <Text style={styles.texto}> Saldo: {props.Valor} </Text>
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