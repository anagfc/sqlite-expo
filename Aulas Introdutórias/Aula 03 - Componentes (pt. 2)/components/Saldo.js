// Componente responsável apenas pela exibição do saldo na tela, separando esse componente dos demais elementos em exibição, como o botão, por exemplo

import React from 'react';
import {Text, StyleSheet} from 'react-native';

// indicar que o componente deve receber valores nas propriedades colocando o valor props nos parênteses
const Saldo = (props) => {

  // Antes o valor do saldo estava "Saldo: 10", mas para que ele se torne dinâmico, é preciso indicar com as propriedades
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