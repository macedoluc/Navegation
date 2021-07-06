import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
    paddingBottom: 10
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      /> */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn.diferenca.com/imagens/reproducao-de-imagem-em-png-com-fundo-transparente-cke.jpg',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;