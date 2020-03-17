import { AppRegistry, YellowBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

AppRegistry.registerComponent(appName, () => App);
