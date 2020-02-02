import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
    <View style={estilos.principal}>
        <Text style={estilos.textoNome}>{props.item.nome}</Text>
        <Text style={estilos.textoValor}>R$ {props.item.valor}</Text>
    </View>                
)

const estilos = StyleSheet.create({
    principal: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#f07a0c'
    },
    textoNome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20
    },
    textoValor: {
        fontSize: 20
    }
});
