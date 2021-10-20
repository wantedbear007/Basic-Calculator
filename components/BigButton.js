import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import colors from '../assets/colors';

const BigButton = props => {
  //   return
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
    width: 162,
    height: 68,
    borderRadius: 43,
    backgroundColor: colors.aboutButton,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21,
    marginLeft: 12,
  },
  buttonText: {
    fontSize: 32,
    fontFamily: 'Montserrat-Light',
    color: colors.white,

    
  },
});

export default BigButton;
