import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.img} />
      <View>
        <Text style={styles.nama}>Zulfi Rizkiawan</Text>
        <Text style={styles.profesi}>Mobile Dev</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nama: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: colors.text.primary,
  },
  profesi: {
    fontSize: 14,
    fontFamily: 'Poppins-medium',
    color: colors.text.secondary,
  },
});
