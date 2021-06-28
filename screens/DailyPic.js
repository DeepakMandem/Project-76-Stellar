import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class DailyPicScreen extends Component {


    render(){

        return(
            <View style={Styles.ScreenText}>
                <Text> DailyPic Screen </Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    ScreenText:{
        flex:1, 
        justifyContent:"center"
    }
})
