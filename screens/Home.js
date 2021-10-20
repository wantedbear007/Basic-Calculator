import {StackRouter} from '@react-navigation/routers';
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors';
import SmallButton from '../components/SmallButton';
import BigButton from '../components/BigButton';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      {/* <SafeAreaView> */}
      <SmallButton
        style={styles.smallButton}
        onPress={() => {
          navigation.navigate('About');
        }}>
        About
      </SmallButton>
      <View style={styles.homeTitle}>
        <Text style={styles.homeTitleText}>CALCULATOR</Text>
      </View>
      <View>
        {/* Answer container */}
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>43+7</Text>
        </View>

        {/* Numpad container */}
        <View style={styles.numpadContainer}>
          <BigButton>
            <Text>Clear</Text>
          </BigButton>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  smallButton: {
    marginLeft: 305,
    marginTop: 14,
  },
  homeTitle: {
    marginTop: 50,
    marginLeft: 56,
  },
  homeTitleText: {
    fontSize: 40,
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
  },
  answerContainer: {
    backgroundColor: colors.foreground,
    marginTop: 77,
    marginHorizontal: 16,
    borderRadius: 26,
  },
  answerText: {
    fontSize: 36,
    color: colors.white,
    fontFamily: 'Montserrat-Light',
    textAlign: 'right',
    paddingVertical: 25,
    paddingHorizontal: 33,
  },
  numpadContainer: {
    backgroundColor: colors.foreground,
    marginVertical: 17,
    marginHorizontal: 16,
    borderRadius: 26,
    height: 370,
  },
  
});

export default Home;
