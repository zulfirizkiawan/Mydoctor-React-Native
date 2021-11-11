import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListDoctor} from '../../components';
import {colors} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
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
