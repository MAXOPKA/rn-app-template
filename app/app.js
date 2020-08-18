/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from "./store"
import Tabs from "./router";

export default () =>
    <Provider store={store}>
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    </Provider>;
