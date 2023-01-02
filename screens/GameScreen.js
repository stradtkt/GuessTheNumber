import React, {useState} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that the number is right!!", [{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    };
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or lower?</Text>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
            </View>
        </View>
        <View>
            {/* LOG ROUNDS */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
});

export default GameScreen;