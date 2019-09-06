/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import { HomePage } from "./src/Home";
import { Nav } from "./src/Navigation";

// import {
//     createAppContainer,
//     createStackNavigator,
//     // StackActions,
//     // NavigationActions,
// } from 'react-navigation';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: Nav,
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(App);
// export default App;
