import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { add, subtract, reset } from '../actions';


class Home extends React.Component {

    render() {
    return (
      <View style={styles.container}>
      <Text>Sumed up to: {this.props.count}</Text>
      <Button title="Add" onPress={()=> this.props.add()} />
        <Button title="Subtract" onPress={()=> this.props.subtract()} />
        <Button title="Reset" onPress={()=> this.props.reset()} />
      </View>
        
        
     
    );  
  }
}

mapStateToProps = (state) => {

  return {
    count: state
  }

}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({add, subtract, reset}, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
