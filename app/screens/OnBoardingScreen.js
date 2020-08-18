import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native";
import {black} from "react-native-material-ui/src/styles/colors";

class OnBoardingScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>
                    Onboarding Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: black,
    }
})

export default OnBoardingScreen
