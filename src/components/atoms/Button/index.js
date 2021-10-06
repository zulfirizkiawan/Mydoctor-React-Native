import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#613eed',
    paddingVertical: 12,
    borderRadius: 20,
  }),
  text: type => ({
    textAlign: 'center',
    color: type === 'secondary' ? 'black' : '#FFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  }),
});
