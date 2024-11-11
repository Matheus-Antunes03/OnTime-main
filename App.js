import * as React from 'react';
import styles from './src/AppStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image } from 'react-native';
import { Rodape } from './src/components/Rodape';
import { Cabecalho_Pesquisa } from './src/components/Cabecalho_Pesquisa';
import { Carrinho } from './src/components/Carrinho/Carrinho';
import { Card } from './src/components/Card/Card';
import { Cabecalho } from './src/components/Cabecalho';
import { Cabecalho_Voltar } from './src/components/Cabecalho_Voltar';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Mapa" component={Mapa} options={{ headerShown: false }} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false }} />
        <Stack.Screen name="Usuario" component={Usuario} options={{ headerShown: false }} />
        <Stack.Screen name="Produto" component={Produto} options={{ headerShown: false }} />
        <Stack.Screen name="Carrinhos" component={Carrinhos} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro_Cliente" component={Cadastro_Cliente} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Index({ navigation }) {
  return (
    <View style={styles.index}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('./assets/logo.jpg')} style={styles.logo}/>
      </TouchableOpacity>
    </View>
  );
}


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho/>
      </View>
      <View style={styles.carrinho}>
        <Carrinho navigation={navigation}/>
      </View>
      <View style={styles.cards}>
        <Card style={styles.card} />
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Mapa({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho/>
      </View>
      <View style={styles.carrinho}>
        <Carrinho navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Pesquisa({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Pesquisa />
      </View>
      <View style={styles.carrinho}>
        <Carrinho navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Usuario({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho/>
      </View>
      <View style={styles.carrinho}>
        <Carrinho navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Produto({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <View style={styles.carrinho}>
        <Carrinho navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Carrinhos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Cadastro_Cliente({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <View style={styles.content} />
    </View>
  );
}
export default App;
