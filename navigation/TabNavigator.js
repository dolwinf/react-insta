import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home.js'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Activity from '../screens/Activity'
import Upload from '../screens/Upload'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';



const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Search: Search,
    Profile: Profile,
    Activity: Activity,
    Upload: Upload
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default createAppContainer(TabNavigator);