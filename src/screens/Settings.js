import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Header from '../components/Header';
import {useFonts} from 'expo-font';

import SettingComponent from '../components/SettingComponent';

export  default function Settings() {
     
        const [loaded] = useFonts({
            MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
            MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
            MontserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
            Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
          });
                  
          if (!loaded) {
            return null;
          }

        const settings=[
            {
                text:'user settings',
                iconName:'person',
            },
            {
                text:'notification settings',
                iconName:'notifications',
            },
            {
                text:'security settings',
                iconName:'lock-closed',
            },
            {
                text:'chat settings',
                iconName:'chatbubbles',
            },
            {
                text:'logout',
                iconName:'log-out',
            },
        ]

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image style={styles.profilePic} resizeMode={'cover'} source={require('../assets/profilePictures/ppEmre.jpg')}/>
                    <View style={styles.username}>
                        <Text style={styles.usernameText}>Emre Cem Çelik</Text>
                    </View>
                    <View style={styles.about}>
                        <Text style={styles.aboutText}>Lorem ipsum dolor dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</Text>
                    </View>
                </View>
                <ScrollView style={styles.settingsContainer}>
                {settings.map((item)=>{
                return(
                    <SettingComponent iconName={item.iconName} text={item.text}/>
                )
                })}
                </ScrollView>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E8F6EF',
    },
    profilePic: {
        width:'100%',
        height:'70%',
    },
    usernameText: {
        fontSize:28,
        fontFamily:'MontserratBold',
        color:'#fff',
    },
    username: {
        position:'absolute',
        alignItems:'center',
        width:'100%',
        bottom:135
    },
    about: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFE194',
        marginHorizontal:'5%',
        borderRadius:5,
        position:'absolute',
        width:'90%',
        bottom:20
    },
    aboutText: {
        fontFamily:'MontserratRegular',
        fontSize:14,
        padding:20,
    },
    settingsContainer: {
        flex:2,
        top:-5,
        marginBottom:65
    },
    box: {
        flex:1
    }
})