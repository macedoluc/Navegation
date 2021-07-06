import React, { useState } from 'react';
import { View, Text } from 'react-native';

const ExibeTextoState = () => {
    const [ texto, setTexto ] = useState('Olá, state');
    return (
        <View>
            <Text>{texto}</Text>
        </View>
    );
};

export default ExibeTextoState;