import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends React.Component {

    state = {
        counter: 0
    }

    add = () => {
        num = this.state.counter + 1
        this.setState({ counter: num})
    }

    
    subtract = () => {
        num = this.state.counter - 1
        this.setState({ counter: num})
    }

    
    reset = () => {
        this.setState({ counter: 0})
    }
  render() {
    return (
      <View style={styles.container}>
      <Text>Sumed up to: {this.state.counter}</Text>
      <Button title="Add" onPress={()=> this.add()} />
        <Button title="Subtract" onPress={()=> this.subtract()} />
        <Button title="Reset" onPress={()=> this.reset()} />
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
});

export default Home;
