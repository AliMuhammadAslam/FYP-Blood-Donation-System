/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import forgotPassword from './src/screens/forgotPassword';
import changePassword from './src/screens/changePassword';



AppRegistry.registerComponent(appName, () => App);
