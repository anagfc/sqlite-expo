import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

// Função indica que, se houver goBack atribuído, deverá ser exibido o botão de voltar

const Header = ({title, goBack, children}) => {

  return(

    <Appbar.Header style={styles.cabecalho}>
      {
        goBack &&
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>

  );

};

const styles = StyleSheet.create({
  cabecalho:{
    marginTop: 25
  }
});

export default Header;