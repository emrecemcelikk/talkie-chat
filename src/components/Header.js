import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFonts} from 'expo-font';

const Header =() => {
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
            <View style={styles.headerContainer}>
                <Text style={styles.logo}>talkie</Text>
                <Text style={styles.header}>chats</Text>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FFB319',
        width:'100%',
        height:'20%'
    },
    header: {
        fontSize:50,
        fontFamily:'MontserratBold',
        letterSpacing:-4,
        marginTop:-20,
    },
    logo: {
        fontSize:20,
        fontFamily:'Pacifico',
        
    },
    headerContainer: {
        margin:33,
        flexDirection:'column',
    }
})


export default Header;