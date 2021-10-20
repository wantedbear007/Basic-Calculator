import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../assets/colors';

const SmallButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{...props.style, ...styles.buttonContainer}}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.foreground,
    width: 78,
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 61,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },
});

export default SmallButton;
