import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILUmum} from '../../../assets';
import {colors} from '../../../utils';

const DoctorCategory = () => {
  return (
    <View style={styles.container}>
      <ILUmum />

      <Text style={styles.textButuh}>Saya Butuh</Text>
      <Text style={styles.textUmum}>Dokter Umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  textButuh: {
    marginTop: 30,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  textUmum: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
  },
});
