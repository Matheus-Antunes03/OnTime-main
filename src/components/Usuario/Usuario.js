import React, {useContext} from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { UserContext } from '../../context/context';

export function Usuario({ navigation }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/fotoPerfil.jpg')} style={styles.foto} />
        
        <LinearGradient
          colors={['transparent', '#ff4400']}
          style={styles.gradient}
        />
      </View>
      <Text style={styles.nome}>{user.nome}</Text>
      <View style={styles.divisoria}></View>
      <TouchableOpacity style={styles.opcoes} onPress={() => navigation.navigate('Meus_Pedidos')}>
        <Image source={require('../../../assets/cesta.png')} style={styles.icone} />
        <Text style={styles.opcao}>Meus Pedidos</Text>
      </TouchableOpacity>
      <View style={styles.divisoria2}></View>
      <TouchableOpacity style={styles.opcoes} onPress={() => navigation.navigate('Meus_Dados')}>
        <Image source={require('../../../assets/usuario.png')} style={styles.icone} />
        <Text style={styles.opcao}>Meus Dados</Text>
      </TouchableOpacity>
      <View style={styles.divisoria2}></View>
      <TouchableOpacity style={styles.opcoes} onPress={() => navigation.navigate('Sobre')}>
        <Image source={require('../../../assets/sobre.png')} style={styles.icone} />
        <Text style={styles.opcao}>Sobre Nós</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Usuario;
