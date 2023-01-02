import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';


const InstructionText = ({children}) => {
  return (
     <Text style={styles.instructionText}>{children}</Text>
  );
}


const styles = StyleSheet.create({
    instructionText: {
        color: Colors.secondary500,
        fontWeight: 'bold',
        fontSize: 24,
    },
});

export default InstructionText;