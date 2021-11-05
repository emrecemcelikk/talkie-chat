import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import {useFonts} from 'expo-font';
import Header from '../components/Header';
import ChatComponent from '../components/ChatComponent';

import { initialMessages } from '../assets/content/initialMessages';

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
    <View style={styles.container}>
      <Header showNav={true} header={'chats'}/>
      <ScrollView>
        {initialMessages.map((item)=>{
          return(
            <ChatComponent pp={item.profilePic} username={item.username} message={item.message} time={item.time} />
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
})