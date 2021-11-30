import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor9} from '../../../assets';
import {colors} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.wrapInput}>
      <Image source={DummyDoctor9} style={styles.avatar} />
      <View>
        <View style={styles.ChatContent}>
          <Text style={styles.text}>
            Hallo Dok, Apakah kalau saya nikah, saya akan bahagia
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  ChatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  wrapInput: {
    marginBottom: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.white,
  },
  date: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 5,
  },
});
