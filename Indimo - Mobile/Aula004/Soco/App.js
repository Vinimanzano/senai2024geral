import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';

const icon = require('./assets/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
      />
      <Switch
        value={habilitado}
        onValueChange={habilitar}
      />

      <Image
        source={{
          uri: (habilitado)
            ? "https://w7.pngwing.com/pngs/271/591/png-transparent-punch-fist-graphy-fist-love-white-face.png"
            : "https://w7.pngwing.com/pngs/338/222/png-transparent-raised-fist-punch-punch-food-face-hand.png"
        }}
        style={styles.Soco}
      />

      {/* {
        (habilitado) 
        ?
        <Image 
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/702/702797.png"
          }}
          style={styles.lampada}
        />
        :
        <Image 
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/702/702814.png"
          }}
          style={styles.lampada}
        />
      } */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px'
  },
  icon: {
    width: '350px',
    height: '350px'
  },
  Soco: {
    width: '350px',
    height: '330px'
  }
});
