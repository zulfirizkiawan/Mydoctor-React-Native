import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDoctor} from '../../assets';
import {Buttons, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILDoctor height="200" width="200" style={styles.ildokter} />
      <Gap height={10} />
      <Text style={styles.TxtMulai}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={50} />
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Lupa Password" size={12} />
      <Gap height={35} />
      <Buttons title="Login" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link title="Belum Punya Akun" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  TxtMulai: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#000',
    fontFamily: 'Poppins-Medium',
    // maxWidth: 180,
  },
  ildokter: {
    alignSelf: 'center',
  },
});
