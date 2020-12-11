/**
 * @format
 */


import {AppRegistry} from 'react-native';
import {name as appName} from '../app.json';

import AppContainer from '../chuangli/route/Root'
// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => AppContainer);
