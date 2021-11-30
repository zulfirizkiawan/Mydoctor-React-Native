import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header type="profile" title="Nairobi Putri" />
      <View style={styles.wrapChati}>
        <Text style={styles.chatDate}>Senin, 20 Maret 2022</Text>
        <ChatItem isMe />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapChati: {
    flex: 1,
  },
});
