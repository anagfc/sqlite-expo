import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {

  return(

    <TextInput
      style={styles.input}
      keyboardType='decimal-pad'
      {...props}
    />

  );
// Usar somente o estilo permite que as demais propriedades sejam acrescentadas de acordo com a necessidade do desenvolvimento. Elas devem ser sinalizadas com props

// Foi acrescentada a propriedade keyboardType pelo fato de ambos os inputs da aplicação terem a mesma configuração: teclado numérico

};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
  }
});

export default Input;