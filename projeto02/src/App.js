
import React from 'react';
import { SafeAreaView } from 'react-native';
import ExibeTexto from './pages/props';
import ExibeTextoState from './pages/state';
import MyText from './pages/propsState';
import AppButton from './pages/button';

const App = () => {
    return (
        <SafeAreaView>
            <ExibeTexto texto='Olá Props' />
            <ExibeTextoState />
            <MyText name='Lucas' />
            <AppButton />
        </SafeAreaView>
    );
};

export default App;