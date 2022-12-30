import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.textInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize='none' 
            autoCorrect={false}
        />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}


const styles = StyleSheet.create({
    inputContainer: {
        shadowColor: "black",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 8,
        borderRadius: 8,
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c'
    },
    textInput: {
        height: 55,
        width: 55,
        fontSize: 30,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});


export default StartGameScreen;