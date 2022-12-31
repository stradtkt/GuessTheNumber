import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';


const StartGameScreen = ({onPickedNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };
    const resetInputHandler = () => {
        setEnteredNumber('');
    };
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be between 1 to 99', 
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        } 
        onPickedNumber(chosenNumber);
    };
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.textInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize='none' 
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
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
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary500
    },
    textInput: {
        height: 55,
        width: 55,
        fontSize: 30,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        color: Colors.secondary500,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});


export default StartGameScreen;