import React, { useState } from 'react';
import { Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './styles';

const AppButton = () => {
    const [ cont, setCont ] = useState(0);

    function Acrescentar() {
        setCont(cont + 1);
    }

    function Decrementar() {
        setCont(cont - 1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Clique nos Botões
                </Text>
                <View style={styles.fixToText}>
                    <Button title="Decrementar" onPress={Decrementar} />
                    <Button title="Acrescentar" onPress={Acrescentar} />
                </View>
                <View>
                    <Text style={styles.title}>{cont}</Text>                     
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AppButton;