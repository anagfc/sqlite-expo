// 1) Toda aplicação deve começar com a importação da biblioteca do React, pois o React Native utiliza sua estrutura:
import React, {useState} from 'react';

// 5) Importação do componente 'View', que serve para estruturação da visualização, como uma div no HTML

// 7) Outro componente importante é o StyleSheet, que permite separar o código de estilo de dentro do componente
import { View, StyleSheet, Text, Button } from 'react-native';


// 2) Criação do nome do componente/página/objeto a ser retornado pelo App.js
const App = () => {

  // 10) É possível usar variáveis para tornar valores dinâmicos (const saldo = 10.00)
  // 13) Para fazer o valor da variável saldo ser mutável, precisamos de dois componentes para receber o useState: o valor e a função que altera esse valor. Dentro dos parênteses do useState, é definido o valor inicial
  const [saldo, setSaldo] = useState(0);

  // É sempre preciso retornar algo, que é em JSX
  return (
    // 6) Componentes possuem propriedades, que permitem configurar tanto dados (valores) quanto estilo. Se somente for acrescentado que o background deve ser verde, nada mudará na exibição, pois o tamanho da View não foi determinado. Para estabelecer a tela inteira, é usado flex com valor 01: <View style={{flex:1, backgroundColor: 'green'}}>
    // 9) Depois de criado o const para agrupar o estilo, basta relacioná-lo ao componente
  
  // 11) Depois, basta utilizar a máscara
  // 14) O botão agora será responsável por alterar o valor da variável saldo
    <View style={styles.container}>
      <Text style={styles.texto}> Saldo: {saldo}</Text>
      <Button
        title="Adicionar saldo"
        onPress={() => { setSaldo(saldo + 10); }}/>
    </View>
  );
}

// 8) Criação do const onde estará descrito o estilo
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'green'
  },

  texto:{
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: 'blod'
  }

});


// 3) Exportação da aplicação
export default App;

// 4) A estrutura básica de todo componente é essa: importação do React, criação da função e exportação dela

// 12) Para atualizar o valor de uma variável, existe o conceito de mudança de estado. Uma função tem três características principais: seu nome (App, no caso), seus parâmetros (que por enquanto não existem, como indicado pelos parênteses vazios em App - () =>) e seu retorno. Para fazer essas mdanças, precisamos usar o hook useState