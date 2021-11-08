import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Buttons, Gap, Header, Link} from '../../components';
import {IconAdd, ILUser} from '../../assets';
import {colors} from '../../utils';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILUser} style={styles.avatar} />
            <IconAdd style={styles.addPhoto} width={35} height={35} />
          </View>
          <Gap height={10} />
          <Text style={styles.nama}> Rizkiawan</Text>
          <Text style={styles.profesi}>Mobile Dev</Text>
        </View>
        <View>
          <Buttons title="Unggah foto dan lanjutkan" />
          <Gap height={30} />
          <Link title="Lewati" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  avatar: {
    height: 110,
    width: 110,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 10,
    right: 4,
  },
  nama: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    color: colors.text.primary,
  },
  profesi: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
