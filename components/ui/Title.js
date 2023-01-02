import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/colors';

const Title = ({children}) => {
  return (
    <LinearGradient colors={[Colors.primary500, Colors.secondary500]}>
      <Text style={styles.title}>{children}</Text>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'RobotoCondensed-Bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        padding: 10,
        elevation: 8,
        shadowOffset: {
          height: 2,
          width: 0,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
      elevation: 8,
      shadowColor: 'black'
    }
});


export default Title;