import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Component also has state {this.props.count}</Text>
        <Button title="Add" onPress={()=> this.props.add()} />
        <Button title="Subtract" onPress={()=> this.props.subtract()} />
        <Button title="Reset" onPress={()=> this.props.reset()} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
