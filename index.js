/**
 * @format
 */
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import QuizIndex from './App/screens/QuizIndex';
import Quiz from './App/screens/Quiz';
const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Learn Kyrgyz',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.getParam('title'),
    }),
  },
});
AppRegistry.registerComponent(appName, () => createAppContainer(MainStack));
