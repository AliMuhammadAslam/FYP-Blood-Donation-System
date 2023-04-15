/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import ForgotPassword from './src/screens/forgotPassword';
import changePassword from './src/screens/changePassword';
import organizations_list from './src/screens/organizations_list';
import Account from './src/screens/account';
import OTPVerification from './src/screens/OTPVerification';
import achievements from './src/screens/achievements';
import patientDetails from './src/screens/patientDetails';
//import tabNavigation from './src/screens/tabNavigation';
import questionnaire from './src/screens/questionnaire';
import manageAddresses from './src/screens/manage_addresses';



AppRegistry.registerComponent(appName, () => achievements);




