import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home.js'
import Search from './Search'
import Profile from './Profile'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';



const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Search: Search,
    Profile: Profile
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