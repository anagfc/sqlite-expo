import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = ({children}) => {
  // Indica que todo o conteúdo passado como propriedade de Container deve ser inserido dentro dele
  return(

    <View style={styles.container}>
      {children}
    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  }
});

export default Container;