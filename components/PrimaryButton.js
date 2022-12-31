import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Colors from '../constants/colors';


const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOutterContainer}>
        <Pressable onPress={onPress} android_ripple={{color: Colors.primary600}} 
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color:'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
});

export default PrimaryButton;