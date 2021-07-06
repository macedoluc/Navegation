import React from 'react';
import { View, Text } from 'react-native';

const ExibeTexto = ({ texto }) => {
    return (
        <View>
            <Text>{texto}</Text>
        </View>
    );
};

export default ExibeTexto;