import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILMedicine} from '../../assets';
import {Buttons, Gap} from '../../components';

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <ILMedicine height="300" width="300" style={styles.ILMedicine} />
      <View>
        <Text style={styles.TxtJudul}>
          Temukan dokter terbaik di sekitar Anda
        </Text>
        <Text style={styles.TxtSubJudul}>
          Dengan bantuan algoritma cerdas kami, sekarang temukan dokter terbaik
          di sekitar Anda dengan sangat mudah
        </Text>
      </View>

      <View style={styles.Btn}>
        <Buttons title="Register" />
        <Gap height={10} />
        <Buttons type="secondary" title="Login" />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },
  ILMedicine: {
    alignSelf: 'center',
  },
  TxtJudul: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  TxtSubJudul: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#999999',
    fontFamily: 'Poppins-Light',
  },
  Btn: {
    paddingHorizontal: 20,
  },
  BtnView: {
    marginTop: 10,
  },
});
