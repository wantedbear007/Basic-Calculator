import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import SmallButton from '../components/SmallButton';
import colors from '../assets/colors';

export default About = ({navigation, props}) => {
  return (
    <View style={styles.aboutContainer}>
      <SmallButton
        onPress={() => navigation.goBack()}
        style={styles.buttonContainer}>
        Back
      </SmallButton>
      <Text style={styles.aboutText}>About</Text>
      <View style={styles.aboutOverContainer}>
        <Text style={styles.aboutOverContainerText}>
          Basic calculator app developed using react-native.
        </Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Text>Lol</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Text>Lol</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Text>Lol</Text>
          </TouchableOpacity>

          {/* 
          <SmallButton style={styles.icon}>Lol</SmallButton>
          <SmallButton style={styles.icon}>Lol</SmallButton>
          <SmallButton style={styles.icon}>Lol</SmallButton> */}

          {/* <View style={styles.icon}>
            <Text>LOL</Text>
          </View>
          <View style={[styles.icon, {marginHorizontal: 20}]}>
            <Text>LOL</Text>
          </View>
          <View style={styles.icon}>
            <Text>LOL</Text>
          </View> */}
        </View>
        <View style={styles.wantedContainer}>
          <Text style={styles.wantedIntro}>Developed by: </Text>
          <Text style={styles.wantedName}>Wantedbear007</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 14,
    marginLeft: 14,
  },
  aboutText: {
    marginTop: 206,
    textAlign: 'center',
    color: colors.white,
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
  },
  aboutOverContainer: {
    backgroundColor: colors.foreground,
    height: 230,
    marginHorizontal: 16,
    borderRadius: 26,
    marginTop: 160,
    padding: 39,
  },
  aboutOverContainerText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: colors.white,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: colors.aboutButton,
    width: 55,
    height: 55,
    borderRadius: 13,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  wantedContainer: {
    flexDirection: 'row',
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wantedIntro: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.white,
  },
  wantedName: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.primary,
  },
});
