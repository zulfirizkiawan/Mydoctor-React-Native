import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {IconBack} from '../../../assets';
import {colors} from '../../../utils';
import {Gap, Buttons} from '../../atoms';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconBack />
      </TouchableOpacity>
      <Buttons type="icon-only" />
      <Text style={styles.text}>Header</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
  },
});
