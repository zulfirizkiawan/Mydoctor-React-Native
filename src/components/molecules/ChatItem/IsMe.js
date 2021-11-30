import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.wrapInput}>
      <View style={styles.ChatContent}>
        <Text style={styles.text}>
          Hallo Dok, Apakah kalau saya nikah, saya akan bahagia
        </Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  ChatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.cardLight,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  wrapInput: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.text.primary,
  },
  date: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 5,
  },
});
