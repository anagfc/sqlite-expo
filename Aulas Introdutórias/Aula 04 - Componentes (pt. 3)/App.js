import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

// Importação do novo componente para ele ser exibido devidamente
import Saldo from './components/Saldo'

const App = () => {
  const [saldo, setSaldo] = useState(0);

  const [valor, setValor] = useState(0);

  return (
    // Inserção do novo componente na view, mantendo a leitura exatamente igual. Porém o valor exibido não é o verdadeiro. Para que esteja correto, é necessário passar o valor do componente pai (saldo dentro do App) para o filho (saldo dentro do componente Saldo). Isso é feito através de propriedades, retornando ao componente saldo e indicando que ele deve receber valores nas propriedades

    // Para dar um valor inicial ao saldo, é preciso acrescentar a informação ao <Saldo />

      // Se o input alterar diretamente a variável saldo, não funcionará como queremos, já que a ideia é de somar valores. Então teremos uma variável 'intermediária' chamada valor para controlar esses acréscimos

    <View style={styles.container}>
      <Saldo Valor={saldo}/>

      <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={valor}
        placeholder="Valor a acrescentar"
        keyboardType="numeric"
      />


      <Button
        title="Adicionar saldo"
        onPress={() => {
          setSaldo(saldo + Number(valor));
        }}
      />
    </View>
  );
};

// Do modo como foi feito antes, o valor do saldo subia de 10 em 10, conforme estabelecido pelo sistema. Para fazer com que o acréscimo seja segundo um valor personalizado, basta usar o componente textinput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default App;

