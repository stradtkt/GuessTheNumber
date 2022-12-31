import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


const PrimaryButton = ({children}) => {
    const pressHandler = () => {
        console.log('Pressed');
    }
  return (
    <View style={styles.buttonOutterContainer}>
        <Pressable onPress={pressHandler} android_ripple={{color: '#640233'}} 
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
        backgroundColor: '#4e0329',
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