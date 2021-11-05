import React from 'react'
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const UserListComponent =(props)=> {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.profilePic}>
                <Image style={styles.profilePic} source={props.pp} resizeMode="cover"/>
            </View>
            <View style={styles.textArea}>
                <Text style={styles.username}>{props.username}</Text>
                <Text style={styles.message}>{props.about}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default UserListComponent;

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