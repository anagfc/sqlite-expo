import React, {useEffect, useState, useCallback} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

import {getGastos} from '../services/GastosServicesDB';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Gastos = () => {

  const navigation = useNavigation();

  const [gastos, setGastos] = useState([]);

  useFocusEffect(
    useCallback(() => {

      getGastos().then((dados) => {
        // Log para confirmar no console se os dados chegaram aqui
        console.log("Dados recebidos no componente:", dados);
        setGastos(dados);
      });
    }, [])
  );


  const renderItem = ({ item }) => (
    <List.Item
      title={
        'R$ ' + item.preco.toFixed(2) + ' (R$ ' + item.preco.toFixed(2) + '/L)'
      }
      description={item.odometro + ' Km'}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? 'red' : 'green'}
          icon="gas-station"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {item.data}
        </Text>
      )}
      onPress={() => navigation.navigate('Abastecimento', {item})}
    />
  );

  return (
    <Container>
      <Header title={'Fuel Manager'} />
      <Body>
        <FlatList
          data={gastos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('Abastecimento')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Gastos;
