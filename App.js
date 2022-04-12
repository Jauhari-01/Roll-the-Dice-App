import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const diceArr = {
  1: require('./assets/D1.png'),
  2: require('./assets/D2.png'),
  3: require('./assets/D3.png'),
  4: require('./assets/D4.png'),
  5: require('./assets/D5.png'),
  6: require('./assets/D6.png')
}

export default function App() {

  //states
  const [dice, setDice] = useState('1');


  function rollDice() {
    const random = (Math.floor(Math.random() * 6) + 1).toString();
    console.log(random);
    setDice(random);
  }

  return (
    <View style={styles.container}>
      <Image
        source={diceArr[dice]}
        style={styles.img}
      />
      <TouchableOpacity
        //onPress takes a function as a argument 
        onPress={() => {
          rollDice()
        }
        }
        style={styles.button}
      >
        <Text
          style={{ color: 'white' }}>Roll The Dice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FBB6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#c686f0',
    padding: 20,
    margin: 40,
    color: 'white',
    borderRadius: 10
  },
  img: {
    width: 150,
    height: 150
  }
});
