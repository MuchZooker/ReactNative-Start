/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import AppContainer from './chuangli/route/Root'
// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => AppContainer);
