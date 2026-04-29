import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton, TextInput, Button, Appbar } from 'react-native-paper';

import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';

import {
  insertGastos,
  updateGastos,
  deleteGastos,
} from '../services/GastosServicesDB';

import Input from '../components/Input';

const Abastecimento = ({ route }) => {
  const navigation = useNavigation();

  const { item } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [tipo, setTipo] = useState('gas');
  const [preco, setPreco] = useState(null);
  const [valor, setValor] = useState(null);
  const [odometro, setOdometro] = useState(null);
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));

  useEffect(() => {
    if (item) {
      setTipo(item.tipo == 0 ? 'gas' : 'etanol');
      setData(item.data);
      setPreco(item.preco.toFixed(2));
      setValor(item.valor.toFixed(2));
      setOdometro(item.odometro.toFixed(0));
    }
  }, [item]);

  const handleSalvar = async () => {
    if (item) {
      await updateGastos({
        tipo: tipo == 'gas' ? 0 : 1,
        data: data,
        preco: preco,
        valor: valor,
        odometro: odometro,
        id: item.id
      }).then();
    } else {
      await insertGastos({
        tipo: tipo == 'gas' ? 0 : 1,
        data: data,
        preco: preco,
        valor: valor,
        odometro: odometro,
      }).then();
    }

    navigation.goBack();
  };

  const handleExcluir = async () => {
    await deleteGastos(item.id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'Abastecimento'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>
      <Body>
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'gas' ? 'checked' : 'unchecked'}
              color="red"
              onPress={() => setTipo('gas')}
            />
            <Text>Gasolina</Text>
          </View>

          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'etanol' ? 'checked' : 'unchecked'}
              color="green"
              onPress={() => setTipo('etanol')}
            />
            <Text>Etanol</Text>
          </View>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format('DD/MM/YYYY'));
            }}
          />
        )}

        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data"
            value={data}
            left={<TextInput.Icon name="calendar" />}
            editable={false}
          />
        </TouchableOpacity>

        <Input
          label="Preço"
          value={preco}
          onChangeText={(text) => setPreco(text)}
          left={<TextInput.Icon name="currency-brl" />}
        />

        <Input
          label="Valor"
          value={valor}
          onChangeText={(text) => setValor(text)}
          left={<TextInput.Icon name="currency-brl" />}
        />

        <Input
          label="Odômetro"
          value={odometro}
          onChangeText={(text) => setOdometro(text)}
          left={<TextInput.Icon name="camera-timer" />}
        />

        <Button
          style={styles.button}
          icon="check"
          mode="contained"
          onPress={handleSalvar}>
          Salvar
        </Button>

        {item && (
          <Button
            style={styles.button}
            icon="trash-can"
            mode="contained"
            onPress={handleExcluir}>
            Excluir
          </Button>
        )}
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
  },
});

export default Abastecimento;
