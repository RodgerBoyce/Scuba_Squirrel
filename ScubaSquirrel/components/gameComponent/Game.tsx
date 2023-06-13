import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../game/entities';
import { useState, useEffect } from 'react';
import Physics from '../../game/utils/physics';
import Header from '../header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import generic from '../../game/utils/generic';

export default function Game({navigation, running, route}: any) {
  const [gameEngine, setGameEngine] = useState(null)
  const [acornCount, setAcornCount]=useState(0)
  const gameStop = route.params.stopGame;
  const lightColours = ['#f41313','#1ec65e', '#ab65ed']
  // const lightColours = ['#13def4','#1eb5c6', '#65e0ed']
  const darkColours = ['#003d4c', '#000001', '#adadd4']
  // const darkColours = ['#08004c', '#2412c9', '#111112']
  const lightColour = generic.getRandomValue(0,2)
  const darkColour = generic.getRandomValue(0,2)


  return (
    <>
       <LinearGradient style = {styles.container} colors={['#79f8ff', '#0040a1']}start={{x:0, y:1}}end={{x:1, y:1}}>
        <View style={styles.header}>
            <Header acornCount = {acornCount}/>
        </View>
        <LinearGradient style = {styles.gameBackground} colors={[lightColours[lightColour], darkColours[darkColour]]}start={{x:1, y:0}}end={{x:1, y:1}}>
          <View style={styles.content}>
            <GameEngine
              ref={(ref) => { setGameEngine(ref) }}
              systems={[Physics]}
              entities={entities()}
              running = {running}
              onEvent = {(e:any) => {
                switch(e.type){
                  case 'game_over' : 
                    gameStop();
                    setAcornCount(0);
                  // gameEngine.stop()
                    break;
                  case 'collect_acorn': 
                    setAcornCount((prevAcornCount) => prevAcornCount + 1)
                  // gameEngine.swap(entities())
                    break;
                  case 'win_con':
                    // setBankedAcornCount
                    setAcornCount(0);
                    navigation.navigate('Win');
                    // gameEngine.stop();
                    gameStop();
                    gameEngine.swap(entities());
                    break;
                }
              }}
              style={{position: 'relative', top: 0, left: 0, bottom: 0, right: 0,}}>
            </GameEngine>
            <StatusBar style="auto" hidden={true}/>
          </View> 
        </LinearGradient>
        {/* <View style={styles.header}>
          <Header acornCount={acornCount}/>
        </View> */}
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
    content:{
      flex: 1,
      border: 5,
      backgroundColor: 'rgba(0, 0, 0, 0)', 
    },
    header:{
      flex: 1,
    },
    gameBackground:{
      flex: 6,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    container:{
      flex:1,
    },
  })