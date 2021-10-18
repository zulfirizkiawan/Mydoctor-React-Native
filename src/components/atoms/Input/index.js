import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputan} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputan: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
  },
});
