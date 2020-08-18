import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnBoardingScreen from "./screens/OnBoardingScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={OnBoardingScreen} />
            <Tab.Screen name="Settings" component={OnBoardingScreen} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={OnBoardingScreen} />
            <Stack.Screen name="Notifications" component={OnBoardingScreen} />
            <Stack.Screen name="Profile" component={OnBoardingScreen} />
            <Stack.Screen name="Settings" component={OnBoardingScreen} />
        </Stack.Navigator>
    );
}

export default RootStack