import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Produto({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/lacta90.png')} style={styles.foto} />
        <View style={styles.content}>
            <Text style={styles.nome}>Barra de chocolate ao leite 90g - Lacta</Text>
            <View style={styles.venda}>
                <View style={styles.vendido}>
                    <Text style={styles.por}>Vendido por:</Text>
                    <Text style={styles.por}>SuperMercado Centro</Text>
                </View>
                <View style={styles.preco}>
                    <View style={styles.lado}>
                        <Text style={styles.de}>De: R$ 8,90</Text>
                        <View style={styles.custo}>
                            <Text style={styles.desconto}>-50%</Text>
                        </View>
                    </View>
                    <Text style={styles.valor}>Por: R$ 4,45</Text>
                </View>
            </View>
            <View style={styles.content2}>
                <View style={styles.infos}>
                    <Text style={styles.infos_prod}>Informações do produto</Text>
                    <Text style={styles.informacao}>• Válido até: 25/12/2024 (5 dias)</Text>
                    <Text style={styles.informacao}>• Marca: Lacta</Text>
                    <Text style={styles.informacao}>• Peso: 90g</Text>
                </View>
                <TouchableOpacity style={styles.adicionar}>
                <Image source={require('../../../assets/carrinhoadicionar.png')} style={styles.carrinho_adicionar} />
                </TouchableOpacity>
            </View>
            <View style={styles.esp_comprar}>
                <TouchableOpacity style={styles.comprar}>Comprar</TouchableOpacity>
            </View>
        </View>
    </View>
  );
}