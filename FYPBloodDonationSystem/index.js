/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/pages/login';
import Signup from './src/pages/signup';

AppRegistry.registerComponent(appName, () => Signup);
