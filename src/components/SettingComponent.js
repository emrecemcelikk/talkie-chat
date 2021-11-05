import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import {useFonts} from 'expo-font';

const SettingComponent =(props)=> {
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
        <View style={styles.container}>
            <Icon name={props.iconName} type="ionicon" size={33}/>
            <Text style={styles.text}>{props.text}</Text>
            <Icon name="chevron-forward" type="ionicon" size={33}/>
        </View>
    )
}

export default SettingComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        marginHorizontal:'5%',
        backgroundColor:'#FFE194',
        padding:15,
        borderRadius:5,
        marginTop:10
    },
    text: {
        fontSize:16,
        fontFamily:'MontserratMedium'
    }

})