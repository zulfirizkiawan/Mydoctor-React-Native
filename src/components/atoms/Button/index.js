import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
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
