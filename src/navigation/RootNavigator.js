import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
	CardStyleInterpolators,
	createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import Screen4 from '../screens/Screen4';
import AnimTab1 from '../bottomTab/Tab';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	
  return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='SplashScreen' component={SplashScreen} />
				<Stack.Screen name='Tab1' component={AnimTab1} />
				<Stack.Screen name='Details' component={DetailScreen} />

				<Stack.Screen name='Screen4' component={Screen4} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;