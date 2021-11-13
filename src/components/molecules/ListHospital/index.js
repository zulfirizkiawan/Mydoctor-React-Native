import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {colors} from '../../../utils';

const ListHospital = ({type, name, address, pic}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.img} />
      <View style={styles.Wrapper}>
        <Text style={styles.rs}>{type}</Text>
        <Text style={styles.namaRS}>{name}</Text>
        <Text style={styles.addres}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 14,
  },
  rs: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
  },
  namaRS: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
    marginTop: -5,
  },
  addres: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
    marginTop: 4,
  },

  img: {
    width: 110,
    height: 80,
    borderRadius: 10,
  },
  Wrapper: {
    flex: 1,
    paddingLeft: 25,
  },
});
