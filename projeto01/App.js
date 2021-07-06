import React from 'react';
import { View, Text } from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 200,
        padding: 20,
        backgroundColor: 'black'
      }}
    >
      <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
      <View style={{ backgroundColor: 'red', flex: 0.3 }} />
      <Text style={{ fontSize: 20, color: 'yellow' }}>Hello World!</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;
