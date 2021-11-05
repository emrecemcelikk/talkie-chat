import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView } from 'react-native'
import Header from '../components/Header';

import UserListComponent from '../components/UserListComponent';
import { initialMessages } from '../assets/content/initialMessages';

export default class Friends extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header showNav={false} header={'friends'}/>
                <ScrollView>
                    {initialMessages.map((item)=>{
                    return(
                        <UserListComponent pp={item.profilePic} username={item.username} about={item.about} time={item.time} />
                    )
                    })}
                </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E8F6EF',
    },
})