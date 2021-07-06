import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ViewBoxesWithColorAndText from './pages/basicComponents/view';
import TextInANest from './pages/basicComponents/text';
import DisplayAnImage from './pages/basicComponents/image';
import UselessTextInput  from './pages/basicComponents/textInput';
import InputMultiline from './pages/basicComponents/textInputMultline';
import AppScroll from './pages/basicComponents/scrollView';
import AppStyle from './pages/basicComponents/styleSheet';
import AppButton from './pages/userInterface/button';
import AppSwitch from './pages/userInterface/switch';
import AppFlatList from './pages/listViews/flatList';
import AppSectionList from './pages/listViews/sectionList';

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <ViewBoxesWithColorAndText />
                <TextInANest />
                <DisplayAnImage />
                <UselessTextInput  />
                <InputMultiline />
                <AppScroll />
                <AppStyle />
                <AppButton />
                <AppSwitch />
                <AppFlatList />
                <AppSectionList />
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;