/**
 * @format
 */

//step1  底部导航栏的组件使用
// import {AppRegistry,Text,} from 'react-native';
// import App from './pages/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);





//页面跳转
import React from 'react';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import NavigationPage from "./pages/Page1";
import NavigationPageNext from "./pages/Page2";
import { AppRegistry } from 'react-native';
import {name as appName} from './app.json';

const AppNavigator = createStackNavigator({
    Home: {
        screen: NavigationPage,
    },
    Details: {
        screen: NavigationPageNext,
    },
}, {
    headerMode:null,
    initialRouteName: 'Home',
});

const Appda = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => Appda);
