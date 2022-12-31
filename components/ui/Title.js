import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.secondary500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.secondary500,
        borderRadius: 6,
        padding: 10
    }
});


export default Title;