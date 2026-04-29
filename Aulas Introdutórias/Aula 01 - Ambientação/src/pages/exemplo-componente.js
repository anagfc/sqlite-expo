import React, { useState } from 'react';
import { Text, Button, View} from 'react-native';

const MeuComponente = () => {

  const [nome, setNome] = useState("");

  return (
    <View>      
     <Text>
        Olá {nome}
      </Text>
      <Button 
        title='Mudar nome'
        onPress={() => setNome("Anakin Skywalker")} 
      />
    </View>
  );

};

export default function App() {

  return (
     <MeuComponente />
  );
}