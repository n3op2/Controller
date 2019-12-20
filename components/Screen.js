import React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NetworkInfo } from "react-native-network-info";
const Net = NetworkInfo;
 
import axios from 'axios';

export default () => {
  return (
    <>
      <ImageBackground source={require('../balloons.jpg')} style={styles.bg}>
        <View>
          <Button
            title="Volume Up"
            onPress={() => {
              Net.getIPAddress().then(ip => {
                console.log(ip);
              });
              axios.get('http://192.168.43.174:3099/volup').then(r => console.log(r)).catch(e => console.log('a: ', e));
              alert('vol up');
            }}
          />
          <Button
            title="Volume Down"
            onPress={() => {
              Net.getIPAddress().then(ip => {
                console.log(ip);
              });
              axios.get('http://192.168.43.174:3099/voldown').then(r => console.log(r)).catch(e => console.log('a: ', e));
              alert('vol up');
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  }
});

