import TabNavigator from '../navigation/TabNavigator';
import AuthNavigator from '../navigation/AuthNavigator';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';



const SwitchNavigator = createSwitchNavigator(
    {
    
        Home: {
            screen: TabNavigator
        },

        Auth: {
            screen: AuthNavigator
        }
    },
        {
        initialRouteName: 'Auth',
        }
);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default createAppContainer(SwitchNavigator);