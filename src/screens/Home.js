import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import {useFonts} from 'expo-font';
import Header from '../components/Header';


export default function Home()  {
        const [loaded] = useFonts({
            MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
            MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
            MontserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
            Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
          });
          
          if (!loaded) {
            return null;
          }
          return(
            <SafeAreaView style={styles.container}>
                <Header/>
            </SafeAreaView>
          )
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E8F6EF',
    },
    text: {
        fontSize:25,
    }
})