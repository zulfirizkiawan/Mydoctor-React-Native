import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyNews1} from '../../../assets';
import {colors} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Wrapper}>
        <Text style={styles.title}>
          Ketahui Risiko Penyakit Berdasarkan Golongan Darah
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>

      <Image source={DummyNews1} style={styles.img} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
    marginTop: 4,
  },

  img: {
    width: 100,
    height: 70,
    borderRadius: 10,
  },
  Wrapper: {
    flex: 1,
  },
});
