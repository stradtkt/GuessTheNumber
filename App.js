import React, {useState} from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';



const App = () => {
  const [userNumber, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber}/>;
  }
  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary500, Colors.secondary500, Colors.primary500]}>
      <ImageBackground 
        source={require('./assets/Images/background.png')} 
        resizeMode="cover" 
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>  
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  }
});

export default App;
