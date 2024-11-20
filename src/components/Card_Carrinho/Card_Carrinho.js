import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

export function Card_Carrinho({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Produto')}>
        <View style={styles.img_check}>
          <CheckBox uncheckedColor="#ffffff" checkedColor="#38D900" checked={isChecked} onPress={() => setIsChecked(!isChecked)}/>
          <Image source={require('../../../assets/lacta90.png')} style={styles.foto} />
        </View>
        <View style={styles.content}>
          <Text style={styles.nome}>Barra de chocolate</Text>
          <Text style={styles.nome}>ao leite 90g - Lacta</Text>
          <View style={styles.preco}>
            <Text style={styles.valor}>R$ 4,45</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
