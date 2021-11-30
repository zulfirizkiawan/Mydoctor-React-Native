import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILMedicine, ILObat, ILPsikiater, ILUmum} from '../../../assets';
import {colors} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Dokter umum') {
      return <ILUmum />;
    }
    if (category === 'Dokter psikiater') {
      return <ILPsikiater />;
    }
    if (category === 'Dokter obat') {
      return <ILObat />;
    }
    return <ILUmum />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.textButuh}>Saya Butuh</Text>
      <Text style={styles.textUmum}>{category}</Text>
    </TouchableOpacity>
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
