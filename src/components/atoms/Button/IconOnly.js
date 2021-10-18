import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets/icon';

const IconOnly = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconBack />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
