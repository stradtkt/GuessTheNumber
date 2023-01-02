import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const InstructionText = ({children, style}) => {
  return (
     <Text style={[styles.instructionText, style]}>{children}</Text>
  );
}


const styles = StyleSheet.create({
    instructionText: {
        color: Colors.secondary500,
        fontSize: 24,
        fontFamily: 'RobotoCondensed-Bold'
    },
});

export default InstructionText;