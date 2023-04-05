/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import forgotPassword from './src/screens/forgotPassword';

import Login from './src/screens/login';
import Signup from './src/screens/signup';
//import forgotPassword from './src/screens/forgotPassword';


AppRegistry.registerComponent(appName, () => forgotPassword);
