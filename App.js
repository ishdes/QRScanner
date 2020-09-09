import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraPage from './src/camera.page';
import FlatButton from './src/button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatButton text='scan qr code' onPress={CameraPage.render}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});