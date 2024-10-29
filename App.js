import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Rodape } from './src/components/Rodape';
import AppStyles from './AppStyles';

function App() {
  return (
    <View style={styles.container}>
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
