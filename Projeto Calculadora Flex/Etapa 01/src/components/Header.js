import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({title}) => {

  return(

    <Appbar.Header style={styles.cabecalho}>
      <Appbar.Content title={title} />
    </Appbar.Header>

  );

};

const styles = StyleSheet.create({
  cabecalho:{
    marginTop: 25
  }
});

export default Header;