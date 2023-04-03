/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import questionnaire from './src/screens/questionnaire';

AppRegistry.registerComponent(appName, () => App);
