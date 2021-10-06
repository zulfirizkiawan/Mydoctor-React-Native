import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDoctor} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.pembungkus}>
      <ILDoctor height="200" width="200" />
      <Text style={styles.namaApp}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pembungkus: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  namaApp: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
});
