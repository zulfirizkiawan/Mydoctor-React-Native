import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Dokter Paling Top</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Kabar Terbaru</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
    maxWidth: 209,
  },
});
