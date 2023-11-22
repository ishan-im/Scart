import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity } from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';

import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import Colors from '../constants/Colors';

const CheckOutScreen = () => {
	const navigation = useNavigation();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		navigation.navigate('OrderScreen');
	// 	}, 4000);
	// }, []);

	return (
		<SafeAreaView style={styles.container}>
			<Animatable.Image
				source={require('../../assets/icons/order.gif')}
				style={{ width: 200, height: 200, resizeMode: 'contain' }}
				animation='slideInUp'
				iterationCount={1}
			/>

			<Animatable.Text
				animation='slideInUp'
				iterationCount={1}
				style={styles.textStyle}>
				Waiting to accept your order
			</Animatable.Text>

			<TouchableOpacity
				style={styles.cartbuttonStyle}
				onPress={() => navigation.navigate('Home')}>
				<Text style={styles.cartbuttonTextStyle}>Go to Home</Text>
			</TouchableOpacity>

			<Progress.Circle
				size={60}
				indeterminate={true}
				color='white'
				fill='#00000000'
			/>
		</SafeAreaView>
	);
};

export default CheckOutScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: Colors.blue,
	},
	textStyle: {
		color: '#fff',
		fontSize: 18,
		marginVertical: 20,
		fontFamily: 'Manrope-Bold',
	},
	cartbuttonStyle: {
		height: 56,
		width: 169,
		marginVertical:20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.primaryWhite,
		borderRadius: 20,
	},
	cartbuttonTextStyle: {
		color: Colors.blue,
		fontFamily: 'Manrope-SemiBold',
		fontSize: 14,
	},
});
