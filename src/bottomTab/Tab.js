import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon, { Icons } from '../components/Icons';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

import Screen4 from '../screens/Screen4';
import * as Animatable from 'react-native-animatable';

const TabArr = [
	{
		route: 'Home',
		label: 'Home',
		type: Icons.Octicons,
		icon: 'home',
		component: HomeScreen,
	},
	{
		route: 'Cart',
		label: 'Cart',
		type: Icons.MaterialIcons,
		icon: 'shopping-cart-checkout',
		component: CartScreen,
	},
	{
		route: 'Favorites',
		label: 'Favorites',
		type: Icons.Feather,
		icon: 'heart',
		component: FavouritesScreen,
	},
	{
		route: 'Screen4',
		label: 'User',
		type: Icons.Feather,
		icon: 'user',
		component: Screen4,
	},
];

const Tab = createBottomTabNavigator();

const animate1 = {
	0: { scale: 0.5, translateY: 7 },
	0.92: { translateY: -34 },
	1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
	0: { scale: 1.2, translateY: -24 },
	1: { scale: 1, translateY: 7 },
};

const circle1 = {
	0: { scale: 0 },
	0.3: { scale: 0.9 },
	0.5: { scale: 0.2 },
	0.8: { scale: 0.7 },
	1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
	const { item, onPress, accessibilityState } = props;
	const focused = accessibilityState.selected;
	const viewRef = useRef(null);
	const circleRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		if (focused) {
			viewRef.current.animate(animate1);
			circleRef.current.animate(circle1);
			textRef.current.transitionTo({ scale: 1 });
		} else {
			viewRef.current.animate(animate2);
			circleRef.current.animate(circle2);
			textRef.current.transitionTo({ scale: 0 });
		}
	}, [focused]);

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={1}
			style={styles.container}>
			<Animatable.View ref={viewRef} duration={1000} style={styles.container}>
				<View style={styles.btn}>
					<Animatable.View ref={circleRef} style={styles.circle} />
					<Icon
						type={item.type}
						name={item.icon}
						color={focused ? Colors.primaryYellow : Colors.black}
					/>
				</View>
				<Animatable.Text ref={textRef} style={styles.text}>
					{item.label}
				</Animatable.Text>
			</Animatable.View>
		</TouchableOpacity>
	);
};

export default function AnimTab1() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.tabBar,
			}}>
			{TabArr.map((item, index) => {
				return (
					<Tab.Screen
						key={index}
						name={item.route}
						component={item.component}
						options={{
							tabBarShowLabel: false,
							tabBarButton: (props) => <TabButton {...props} item={item} />,
						}}
					/>
				);
			})}
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabBar: {
		height: 70,
		position: 'absolute',
		bottom: 16,
		right: 16,
		left: 16,
		borderRadius: 16,
	},
	btn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 4,
		borderColor: Colors.primaryWhite,
		backgroundColor: Colors.primaryWhite,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.black,
		borderRadius: 25,
	},
	text: {
		fontSize: 10,
		textAlign: 'center',
		color: Colors.primaryGray,
	},
});
