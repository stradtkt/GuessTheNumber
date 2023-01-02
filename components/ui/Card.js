import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children}) => {
  return (
   <View style={styles.inputContainer}>{children}</View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        shadowColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 8,
        borderRadius: 8,
        marginHorizontal: 24,
        padding: 16,
        marginTop: 20,
        backgroundColor: Colors.primary500
    },
});

export default Card;