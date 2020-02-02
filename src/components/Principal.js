import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Lista from './Lista';

export default class Principal extends Component {
    static navigationOptions= {
        title: "Produtos",
        headerStyle: { backgroundColor: '#f07a0c' },
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' }
    };

    render() {
        return (
            <View>
                <StatusBar backgroundColor="#f07a0c" />
                <Lista />                
            </View>
        );
    }
}
