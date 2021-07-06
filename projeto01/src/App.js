import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './pages/home';
import Sobre from './pages/sobre';

const App = () => {
    return (
        <SafeAreaView>
            <Home />
            <Sobre />
        </SafeAreaView>
    );
};

export default App;