import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import {useFonts} from 'expo-font';


export default function Login()  {
        const [loaded] = useFonts({
            MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
            MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
            MontserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
            Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
          });
          
          if (!loaded) {
            return null;
          }

        return (
            <View style={styles.container} >
                <ImageBackground source={require('../assets/bloobs.png')} resizeMode="cover" style={styles.image}>  
                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.logo}>talkie</Text>
                        <Text style={styles.subHeader}>Chat freely</Text>
                    </View>
                </View>
                <View style={styles.box1}>
                    <View>
                        <View style={styles.inputArea}>
                            <TextInput placeholder={'Your Email'} placeholderTextColor="#434343" style={styles.input}/>
                        </View>
                        <View style={styles.inputArea}>
                            <TextInput placeholder={'Password'} placeholderTextColor="#434343" style={styles.input}/>
                        </View>
                    </View>
                    <View style={styles.textArea}>
                        <View style={styles.textContainer}>
                            <View style={styles.line}></View>
                            <Text style={styles.subText}>Forgot Password</Text>
                        </View>
                        <View>
                            <View style={styles.line}></View>
                            <Text style={styles.subText}>Sign up</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>sign in</Text>
                    </TouchableOpacity>
                    <View style={styles.welcomeArea}>
                        <Text style={styles.welcomeText}>welcome back!</Text>
                    </View>
                </View>
                </ImageBackground>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFE194',
    },
    header: {
        marginLeft:30,
        marginTop:'-15%',
    },
    logo: {
        fontFamily:'Pacifico',
        fontSize:75,
    },
    subHeader: {
        marginTop:'-5%',
        fontFamily:'MontserratRegular',
        marginLeft:5,
        fontSize:15,
    },
    image: {
        position:'absolute',
        width:'100%',
        height:'100%',
        bottom:'-15%',
    },
    inputArea: {
        backgroundColor:'#E8F6EF',
        marginHorizontal:30,
        marginTop:'4%',
        borderRadius:10
    },
    input: {
        margin:'5%',
        fontFamily:'MontserratMedium',
        fontSize:16,
        color:'black'
    },
    textArea: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'8%',
        marginHorizontal:'-2%',
    },
    subText: {
        fontFamily:'MontserratBold',
        fontSize:16,
        marginTop:-25,
    },
    line: {
        backgroundColor:'#B8DFD8',
        borderColor:'#B8DFD8',
        borderWidth:7,
    },
    button: {
        backgroundColor:'#FFB319',
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
        padding:'2%',
        borderRadius:20,
        marginLeft:'10%'
    },
    buttonText: {
        fontFamily:'MontserratBold',
        fontSize:27
    },
    welcomeText: {
        fontSize:50,
        fontFamily:'MontserratBold',
        textAlign:'right',
        letterSpacing:-4,
        lineHeight:50
    },
    welcomeArea: {
        marginTop:'5%',
        marginHorizontal:'10%'
    },
    box: {
        flex:1.2,
    },
    box1: {
        flex:3,
    },
    box2: {
        flex:3,
    }
})