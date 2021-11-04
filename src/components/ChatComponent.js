import React, { Component } from 'react'
import { Text, View,Image, StyleSheet } from 'react-native'

const ChatComponent =(props)=> {

    return (
        <View style={styles.container}>
            <View style={styles.profilePic}>
                <Image style={styles.profilePic} source={props.pp} resizeMode="cover"/>
            </View>
            <View style={styles.textArea}>
                <Text style={styles.username}>{props.username}</Text>
                <Text style={styles.message}>{props.message}</Text>
            </View>
            <Text style={styles.time}>{props.time}</Text>
        </View>
    )
}


export default ChatComponent;

const styles = StyleSheet.create({
    profilePic: {
        width:60,
        height:60,
        borderRadius:35,
    },
    container: {
        width:'100%',
        height:'12%',
        flexDirection:'row',
        padding:20,
        alignItems:'center',
    },
    username: {
        fontFamily:'MontserratMedium',
        fontSize:17
    },
    message: {
        fontFamily:'MontserratBold',
        fontSize:13
    },
    textArea: {
        justifyContent:'center',
        marginHorizontal:20,
    },
    time: {
        position:'absolute',
        fontFamily:'MontserratBold',
        fontSize:13,
        right:20
    }
})