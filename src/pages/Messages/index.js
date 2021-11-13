import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor3, DummyDoctor4, DummyDoctor5} from '../../assets';
import {ListDoctor} from '../../components';
import {colors} from '../../utils';

// Data state
const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      FotoProfile: DummyDoctor3,
      nama: 'Sarada Uchiha',
      desc: 'Baik pak, terima kasih atas waktunya ...',
    },
    {
      id: 2,
      FotoProfile: DummyDoctor4,
      nama: 'Itzuki Uzumaki',
      desc: 'Baik dok, terima kasih',
    },
    {
      id: 3,
      FotoProfile: DummyDoctor5,
      nama: 'Sakura Uchiha',
      desc: 'Saya sakit telinga',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor
              key={doctor.id}
              FotoProfile={doctor.FotoProfile}
              nama={doctor.nama}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
    fontSize: 20,
    marginTop: 20,
  },
});
