import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ListDoctor} from '../../components';
import {DummyDoctor3, DummyDoctor4, DummyDoctor5} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pilih Dokter" onPress={() => navigation.goBack()} />
      <View style={styles.wrapList}>
        <ListDoctor
          FotoProfile={DummyDoctor3}
          nama="Alexa Dina"
          desc="Wanita"
          onPress={() => navigation.navigate('Chatting')}
        />
        <ListDoctor
          FotoProfile={DummyDoctor3}
          nama="Alexa Dina"
          desc="Wanita"
        />
        <ListDoctor
          FotoProfile={DummyDoctor3}
          nama="Alexa Dina"
          desc="Wanita"
        />
      </View>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapList: {
    paddingHorizontal: 10,
  },
});
