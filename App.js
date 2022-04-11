import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  rollDice() {
    random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.rollDice()}
          style={styles.button}
        >
          <Text
           style={{color:'white'}}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#c686f0',
    padding:20,
    margin:10,
    color:'white',
    borderRadius:10
  }
});
