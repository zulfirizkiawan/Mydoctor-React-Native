import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.wrapBtn(disable)}>
      {disable && <IconSendLight />}
      {!disable && <IconSendDark />}
    </View>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  wrapBtn: disable => ({
    backgroundColor: disable ? colors.primary : colors.secondary,
    width: 45,
    height: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    borderRadius: 10,
  }),
});
