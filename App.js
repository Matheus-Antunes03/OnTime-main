import * as React from 'react';
import styles from './src/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Rodape } from './src/components/Rodape';
import { Cabecalho_Pesquisa } from './src/components/Cabecalho_Pesquisa';
import { Carrinho } from './src/components/Carrinho/Carrinho';
import { Card } from './src/components/Card/Card';
import { Cadastro_Cliente } from './src/components/Cadastro_Cliente';
import { Cabecalho } from './src/components/Cabecalho';
import { Cabecalho_Voltar } from './src/components/Cabecalho_Voltar';
import { Menu_Cadastro_Conteudo } from './src/components/Menu_Cadastro_Conteudo';
import { Cadastro_Estabelecimento } from './src/components/Cadastro_Estabelecimento';
import { IndexTela } from './src/components/Index/IndexTela';
import { Usuario } from './src/components/Usuario';
import { Estabelecimento } from './src/components/Estabelecimento';
import { Card_Carrinho } from './src/components/Card_Carrinho';
import { Produto } from './src/components/Produto';
import { Carrinho_Total } from './src/components/Carrinho_Total';
import { Cadastro_Produto } from './src/components/Cadastro_Produto';
import { Card_Mapa } from './src/components/Card_Mapa/Card_Mapa';
import { Card_Produto } from './src/components/Card_Produto';
import { Card_Pedido } from './src/components/Card_Pedido';
import { Meus_Dados } from './src/components/Meus_Dados';
import { Meus_Dados_Estabelecimento } from './src/components/Meus_Dados_Estabelecimento';
import { Card_Pedidos } from './src/components/Card_Produtos';
import { Card_Pedido_Estabelecimento } from './src/components/Card_Pedido_Estabelecimento';
import { Estabelecimento_Pagina } from './src/components/Estabelecimento_Pagina';
import { PedidosProvider, UserProvider } from './src/context/context';
import { Menu_Login } from './src/components/Menu_Login';
import { Login_Usuario } from './src/components/Login_Usuario';
import { Login_Estabelecimento } from './src/components/Login_Estabelecimento';
import { Cabecalho_So_Voltar } from './src/components/Cabecalho_So_Voltar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <UserProvider>
      <PedidosProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
            <Stack.Screen name="Menu_Cadastro" component={Menu_Cadastros} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro_Cliente" component={Cadastro_Clientes} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro_Estabelecimento" component={Cadastro_Estabelecimentos} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Menu_Login" component={Menu_Login_Tela} options={{ headerShown: false }} />
            <Stack.Screen name="Login_Usuario" component={Login_Usuarios} options={{ headerShown: false }} />
            <Stack.Screen name="Login_Estabelecimento" component={Login_Estabelecimentos} options={{ headerShown: false }} />
            <Stack.Screen name="Mapa" component={Mapa} options={{ headerShown: false }} />
            <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false }} />
            <Stack.Screen name="Usuario" component={Usuarios} options={{ headerShown: false }} />
            <Stack.Screen name="Produto" component={Produto_Pagina} options={{ headerShown: false }} />
            <Stack.Screen name="Estabelecimento" component={Estabelecimentos} options={{ headerShown: false }} />
            <Stack.Screen name="Estabelecimento_Perfil" component={Estabelecimento_Perfil} options={{ headerShown: false }} />
            <Stack.Screen name="Carrinhos" component={Carrinhos} options={{ headerShown: false }} />
            <Stack.Screen name="Meus_Pedidos" component={Meus_Pedidos} options={{ headerShown: false }} />
            <Stack.Screen name="Pedidos_Estabelecimento" component={Pedidos_Estabelecimento} options={{ headerShown: false }} />
            <Stack.Screen name="Produtos_Estabelecimento" component={Produtos_Estabelecimento} options={{ headerShown: false }} />
            <Stack.Screen name="Meus_Dados" component={Meus_Dados_Pagina} options={{ headerShown: false }} />
            <Stack.Screen name="Meus_Dados_Estabelecimento" component={Meus_Dados_Estabelecimento_Pagina} options={{ headerShown: false }} />
            <Stack.Screen name="Estabelecimento_Pagina" component={Estabelecimento_Pagina} options={{ headerShown: false }} />
            <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro_Produto" component={Cadastro_Produtos} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PedidosProvider>
    </UserProvider>
  );
}

function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <IndexTela navigation={navigation} />
    </View>
  );
}

function Menu_Login_Tela({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Menu_Login navigation={navigation} />
    </View>
  );
}

function Login_Usuarios({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogin}>
        <Cabecalho_So_Voltar navigation={navigation} />
      </View>
      <Login_Usuario navigation={navigation} />
    </View>
  );
}

function Login_Estabelecimentos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogin}>
        <Cabecalho_So_Voltar navigation={navigation} />
      </View>
      <Login_Estabelecimento navigation={navigation} />
    </View>
  );
}

function Menu_Cadastros({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Menu_Cadastro_Conteudo navigation={navigation} />
    </View>
  );
}

function Cadastro_Clientes({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Cadastro_Cliente navigation={navigation} />
    </View>
  );
}

function Cadastro_Estabelecimentos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Cadastro_Estabelecimento navigation={navigation} />
    </View>
  );
}

function Cadastro_Produtos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Cadastro_Produto navigation={navigation} />
    </View>
  );
}

function Home({ navigation }) {
  const [previousScreen, setPreviousScreen] = React.useState('');
  const [ehEstabelecimento, setEhEstabelecimento] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const previousRoute = navigation.getState().routes[navigation.getState().index - 1];
      console.log('previousRoute', previousRoute);
      if (previousRoute) {
        setPreviousScreen(previousRoute.name);
        setEhEstabelecimento(previousRoute.name === 'Login_Estabelecimento');
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho />
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>
      <View style={styles.cards}>
        <Card navigation={navigation} />
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} ehEstabelecimento={ehEstabelecimento} />
      </View>
      <View style={styles.selecionadoHome} />
    </View>
  );
}

function Mapa({ navigation }) {
  const [previousScreen, setPreviousScreen] = React.useState('');
  const [ehEstabelecimento, setEhEstabelecimento] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const previousRoute = navigation.getState().routes[navigation.getState().index - 1];
      console.log('previousRoute', previousRoute);
      if (previousRoute) {
        setPreviousScreen(previousRoute.name);
        setEhEstabelecimento(previousRoute.name === 'Home');
      }
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets//mapa.png')} style={styles.mapaimg}></ImageBackground>
      <View style={styles.header}>
        <Cabecalho />
      </View>
      <View>
        <Card_Mapa navigation={navigation} />
      </View>
      <View style={styles.content} />
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>
      <View style={styles.footer}>
        <Rodape navigation={navigation} ehEstabelecimento={ehEstabelecimento} />
      </View>
      <View style={styles.selecionadoMapa} />
    </View>
  );
}

function Pesquisa({ navigation }) {
  const [previousScreen, setPreviousScreen] = React.useState('');
  const [ehEstabelecimento, setEhEstabelecimento] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const previousRoute = navigation.getState().routes[navigation.getState().index - 1];
      console.log('previousRoute', previousRoute);
      if (previousRoute) {
        setPreviousScreen(previousRoute.name);
        setEhEstabelecimento(previousRoute.name === 'Home');
      }
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Pesquisa />
      </View>
      <Text style={styles.est_prod}>Estabelecimentos</Text>
      <View style={styles.divisoria2} />
      <View style={styles.cards2}>
        <Card navigation={navigation} />
      </View>
      <Text style={styles.est_prod}>Produtos</Text>
      <View style={styles.divisoria3} />
      <View style={styles.cards2}>
        <Card_Produto navigation={navigation} />
      </View>
      <View style={styles.content} />
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>
      <View style={styles.footer}>
        <Rodape navigation={navigation} ehEstabelecimento={ehEstabelecimento} />
      </View>
      <View style={styles.selecionadoPesquisa} />
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
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>
      <View style={styles.headerUsuario}>
        <Cabecalho />
      </View>
      <View style={styles.contentUsuario} />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.gradient2} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoUsuario} />
    </View>
  );
}

function Produto_Pagina({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>
      <Produto />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Estabelecimentos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.usuario}>
        <Estabelecimento navigation={navigation} />
      </View>
      <View style={styles.headerUsuario}>
        <Cabecalho />
      </View>
      <View style={styles.contentUsuario} />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.gradient2} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoUsuario} />
    </View>
  );
}

function Estabelecimento_Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.usuario}>
        <Estabelecimento_Pagina navigation={navigation} />
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>
      <View style={styles.headerUsuario}>
        <Cabecalho />
      </View>
      <View style={styles.contentEstabelecimento} />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.gradient2} />
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
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Text style={styles.meu_carrinho}>Meu Carrinho</Text>
      <View style={styles.divisoria} />
      <View style={styles.card_carrinho} >
        <Card_Carrinho navigation={navigation} />
      </View>
      <View style={styles.content} />
      <Carrinho_Total />
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
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Text style={styles.meusPedidos}>Meus Pedidos</Text>
      <View style={styles.divisoria2} />
      <View style={styles.cards2}>
        <Card_Pedido />
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>

      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Pedidos_Estabelecimento({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Text style={styles.pedidos}>Pedidos</Text>
      <View style={styles.divisoria} />
      <View style={styles.cards2}>
        <Card_Pedido_Estabelecimento />
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Produtos_Estabelecimento({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Text style={styles.produtos}>Produtos</Text>
      <View style={styles.divisoria} />
      <View style={styles.cards2}>
        <Card_Pedidos />
      </View>
      <View style={styles.content} />
      <TouchableOpacity style={styles.adicionar} onPress={() => navigation.navigate('Cadastro_Produto')}>
        <Text style={styles.adicionarTexto}>+</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

function Meus_Dados_Pagina({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.usuario}>
        <Meus_Dados />
      </View>
      <View style={styles.carrinho}>
        <Carrinho style={styles.carrinhoicone} navigation={navigation} />
      </View>
      <View style={styles.headerUsuario}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <View style={styles.content} />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.gradient2} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoUsuario} />
    </View>
  );
}

function Meus_Dados_Estabelecimento_Pagina({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.usuario}>
        <Meus_Dados_Estabelecimento />
      </View>
      <View style={styles.headerUsuario}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
      <View style={styles.selecionadoUsuario} />
    </View>
  );
}

function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho_Voltar navigation={navigation} />
      </View>
      <Text style={styles.sobre}>A origem da OnTime se deu pela necessidade de solucionar um grave problema global: o desperdício de alimentos. O que é alarmante considerando que a produção dos mesmos é uma das principais fontes de riqueza do nosso país. É chocante pensar que existe um desperdício tão significativo quando milhões de pessoas sofrem com a fome diariamente. Tendo a pobreza e o encarecimento...</Text>
      <View style={styles.content} />
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  );
}

export default App;