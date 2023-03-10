import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

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
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter A Number</InstructionText>
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
        </Card>
    </View>
  );
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop:75,
        alignItems: 'center'
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