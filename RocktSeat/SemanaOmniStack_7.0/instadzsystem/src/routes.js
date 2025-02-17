import React from 'react'
import { createAppContainer, createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    },{
        // initialRouteName: 'New',
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo}/>,
            HeaderBackTitle: null,
        },
        mode: 'modal'
    })
);