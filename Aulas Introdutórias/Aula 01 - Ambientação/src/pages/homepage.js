// Parte de configurações
import React from 'react';
import {View, Text, Button} from 'react-native';

// Para criar uma página, é preciso usar as funções JS
const HomePage = () => {
  return (

    // Uma view funciona como uma div, não tendo conteúdo a exibir, mas delimitando um espaço a ser utilizado
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>PUC Minas</Text>
      <Text>Análise e Desenvolvimento de Sistemas - Eixo 03</Text>
      <Text>Desenvolvimento de aplicação móvel</Text>
      <Text>Professor Kleber</Text>
    </View>
  );
}

export default HomePage;