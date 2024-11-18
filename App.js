import * as React from 'react';
import styles from './src/AppStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image } from 'react-native';
import { Rodape } from './src/components/Rodape';
import { Cabecalho_Pesquisa } from './src/components/Cabecalho_Pesquisa';
import { Carrinho } from './src/components/Carrinho/Carrinho';
import { Card } from './src/components/Card/Card';
import { Cadastro_Cliente } from './src/components/Cadastro_Cliente';
import { Cabecalho } from './src/components/Cabecalho';
import { Cabecalho_Voltar } from './src/components/Cabecalho_Voltar';
import { TouchableOpacity } from 'react-native';
import { Menu_Cadastro_Conteudo } from './src/components/Menu_Cadastro_Conteudo';
import { Cadastro_Estabelecimento } from './src/components/Cadastro_Estabelecimento';
import { IndexTela } from './src/components/Index/IndexTela';
import { Usuario } from './src/components/Usuario';
import { Estabelecimento } from './src/components/Estabelecimento';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="Menu_Cadastro" component={Menu_Cadastros} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro_Cliente" component={Cadastro_Clientes} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro_Estabelecimento" component={Cadastro_Estabelecimentos} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Mapa" component={Mapa} options={{ headerShown: false }} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false }} />
        <Stack.Screen name="Usuario" component={Usuarios} options={{ headerShown: false }} />
        <Stack.Screen name="Produto" component={Produto} options={{ headerShown: false }} />
        <Stack.Screen name="Estabelecimento" component={Estabelecimentos} options={{ headerShown: false }} />
        <Stack.Screen name="Carrinhos" component={Carrinhos} options={{ headerShown: false }} />
        <Stack.Screen name="Meus_Pedidos" component={Meus_Pedidos} options={{ headerShown: false }} />
        <Stack.Screen name="Meus_Dados" component={Meus_Dados} options={{ headerShown: false }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <IndexTela navigation={navigation}/>
    </View>
  );
}

function Menu_Cadastros({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <Menu_Cadastro_Conteudo navigation={navigation}/>
    </View>
  )
}

function Cadastro_Clientes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <Cadastro_Cliente navigation={navigation}/>
    </View>
  );
}

function Cadastro_Estabelecimentos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <Cadastro_Estabelecimento navigation={navigation}/>
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
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
      </View>
      <View style={styles.cards}>
        <Card navigation={navigation} style={styles.card} />
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoHome}/>
    </View>
  );
}

function Mapa({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho/>
      </View>
      <View style={styles.content} />
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
      </View>
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoMapa}/>
    </View>
  );
}

function Pesquisa({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Pesquisa />
      </View>
      <View style={styles.content} />
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
      </View>
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoPesquisa}/>
    </View>
  );
}

function Usuarios({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.usuario}>
        <Usuario navigation={navigation} />
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
      </View>
      <View style={styles.headerUsuario}>
        <Cabecalho/>
      </View>
      <View style={styles.contentUsuario} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoUsuario}/>
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
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Estabelecimentos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <View>
        <Estabelecimento/>
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
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

function Meus_Pedidos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Meus_Dados({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation}/>
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation}/>
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Sobre({ navigation }) {
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

export default App;