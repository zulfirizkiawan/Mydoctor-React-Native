import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={15} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={5} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.Label}>Dokter Paling Top</Text>
          <Gap height={16} />
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.Label}>Kabar Terbaru</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 16,
    flex: 1,
  },
  welcome: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  Label: {
    marginTop: 25,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
  },
});
