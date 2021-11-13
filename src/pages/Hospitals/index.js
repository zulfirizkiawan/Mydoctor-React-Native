import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyBgHospital,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {ListHospital} from '../../components';
import {colors} from '../../utils';

// Data Inline
const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyBgHospital} style={styles.bg}>
        <Text style={styles.title}>Rumah Sakit Terdekat</Text>
        <Text style={styles.desk}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Lavalet Sawojajar"
          address="Jl. Suhat No 22"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit"
          name="Panti Nirmala"
          address="Jl. Muharto No 08"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit"
          name="Panti Waluya Sawahan"
          address="Jl. Nusakambangan No.56"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  bg: {
    height: 270,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    paddingTop: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: colors.white,
  },
  desk: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: colors.white,
    marginTop: 8,
    textAlign: 'center',
  },
  content: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFF',
    flex: 1,
    marginTop: -30,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});
