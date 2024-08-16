import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Register the root component for the app
AppRegistry.registerComponent(appName, () => App);
