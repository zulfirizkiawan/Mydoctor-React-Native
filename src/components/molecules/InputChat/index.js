import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Buttons} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.wrapInput}>
      <TextInput style={styles.input} placeholder="Ketikan Pesan" />
      <Buttons type="btn-icon-send" disable />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    flex: 1,
    marginRight: 10,
  },
  wrapInput: {
    padding: 10,
    flexDirection: 'row',
  },
});
