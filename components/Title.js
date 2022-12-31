import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'purple',
        padding: 10
    }
});


export default Title;