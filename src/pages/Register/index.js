import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Buttons, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Nama Lengkap" />
        <Gap height={20} />
        <Input label="Pekerjaan" />
        <Gap height={20} />
        <Input label="Email" />
        <Gap height={20} />
        <Input label="Password" />
        <Gap height={40} />
        <Buttons
          title="Daftar"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
