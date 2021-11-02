import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import {useFonts} from 'expo-font';


export default function Signup()  {
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
            <SafeAreaView style={styles.container} >  
                <ImageBackground source={require('../assets/bloobs1.png')} resizeMode="cover" style={styles.image}>
                </ImageBackground>
                    <SafeAreaView style={styles.box}>
                        <View style={styles.header}>
                            <Text style={styles.logo}>talkie</Text>
                            <Text style={styles.subHeader}>Chat freely</Text>
                        </View>
                    </SafeAreaView>
                    <View style={styles.box1}>
                        <View>
                            <View style={styles.welcomeArea}>
                                <Text style={styles.welcomeText}>welcome stranger!</Text>
                            </View>
                            <View style={styles.inputArea}>
                                <TextInput placeholder={'Your Name'} placeholderTextColor="#434343" style={styles.input}/>
                            </View>
                            <View style={styles.inputArea}>
                                <TextInput placeholder={'Your Email'} placeholderTextColor="#434343" style={styles.input}/>
                            </View>
                            <View style={styles.inputArea}>
                                <TextInput placeholder={'Password'} placeholderTextColor="#434343" style={styles.input}/>
                            </View>
                        </View>
                        <View style={styles.textArea}>
                            <View>
                                <View style={styles.line}></View>
                                <Text style={styles.subText}>Sign in</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>sign up</Text>
                        </TouchableOpacity>
                    </View>  
            </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFE194',
    },
    header: {
        marginLeft:30,
    },
    logo: {
        fontFamily:'Pacifico',
        fontSize:75,
    },
    subHeader: {
        marginTop:'-6%',
        fontFamily:'MontserratRegular',
        marginLeft:5,
        fontSize:15,
    },
    image: {
        position:'absolute',
        width:'100%',
        height:'100%',
        bottom:'18%'
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
        marginHorizontal:'10%',
        marginTop:'8%'
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
        right:'-30%',
        marginTop:'6%'
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
        marginHorizontal:'10%',
        marginBottom:20,
    },
    box: {
        flex:1,
        top:'4%'
    },
    box1: {
        flex:2.2,
    },
})