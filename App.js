import * as React from 'react';
import styles from './src/AppStyles';
import { View } from 'react-native';
import { Rodape } from './src/components/Rodape';
import { Cabecalho } from './src/components/Cabecalho';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho />
      </View>
      <View style={styles.content}>
      </View>
      <View style={styles.footer}>
        <Rodape />
      </View>
    </View>
  );
}

export default App;
