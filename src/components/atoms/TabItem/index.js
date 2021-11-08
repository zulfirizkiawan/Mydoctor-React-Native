import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconChats,
  IconChatsActive,
  IconDoctor,
  IconDoctorActive,
  IconHospital,
  IconHospitalActive,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Dokter') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Pesan') {
      return active ? <IconChatsActive /> : <IconChats />;
    }
    if (title === 'R. Sakit') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 12,
    color: active ? colors.text.MenuActive : colors.text.MenuinActive,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 3,
  }),
});
