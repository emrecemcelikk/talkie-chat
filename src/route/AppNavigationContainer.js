import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Friends from '../screens/Friends';

import { Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function AppStack() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle:{position:'absolute', backgroundColor:'#B8DFD8', borderTopStartRadius:30,borderTopEndRadius:30, height:80 }}}>
        <Tab.Screen name="Friends" component={Friends}
         options={{ headerShown:false, tabBarActiveTintColor:'#000000',
        tabBarIcon:({color})=> <Icon name="people" type="ionicon" color={color} size={33}/> }}/>

        <Tab.Screen name="Home" component={Home}
        options={{ headerShown:false, tabBarActiveTintColor:'#000000',
        tabBarIcon:({color})=> <Icon name="chatbox" type="ionicon" color={color} size={33}/> }}/>

        <Tab.Screen name="Settings" component={Settings}
        options={{ headerShown:false, tabBarActiveTintColor:'#000000',
        tabBarIcon:({color})=> <Icon name="cog" type="ionicon" color={color} size={33}/> }}/>
    </Tab.Navigator>
  );
}

export default class AppNavigationContainer extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="AppStack" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} /> 
                    <Stack.Screen name="AppStack" component={AppStack} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
