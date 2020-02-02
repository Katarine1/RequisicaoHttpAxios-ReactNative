import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Item from './Item';

// Cliente Http com Axios
import axios from 'axios';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = { lista: [] };// Lista Vazia
    }

    UNSAFE_componentWillMount() {
        axios.get('http://www.mocky.io/v2/5e36df8e3200005e00ae3d08')
        .then(response => { this.setState({lista: response.data}); })
        .catch(() => {alert("Erro ao recuperar os dados");});
    }

    render() {
        return (            
            <ScrollView>
                { this.state.lista.map(item => (                    
                    <Item key={item.nome} item={item}/>                                      
                ))}
            </ScrollView>
        );
    }
}
