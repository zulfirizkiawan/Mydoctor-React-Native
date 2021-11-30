import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor8} from '../../../assets';
import {colors} from '../../../utils';
import {Gap, Buttons} from '../../atoms';

const Profile = ({onPress, title, type}) => {
  return (
    <View style={styles.container}>
      <Buttons type="icon-only" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.text}>Nairobi Putri</Text>

        <Text style={styles.dokterApa}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor8} style={styles.avatar} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    elevation: 10,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
  },
  avatar: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  content: {
    alignItems: 'center',
    flex: 1,
  },
  dokterApa: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
