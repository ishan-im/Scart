import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon, { Icons } from './Icons'
import Colors from '../constants/Colors'
import { useSelector, useDispatch } from 'react-redux';
import {cartDecrement,cartIncrement} from '../lib/actions/cart'

const CartItemCard = ({id, imgsrc, name, price, quantity }) => {
    

    const dispatch = useDispatch();

    const incrementHandler = (prod) => {
        dispatch(cartIncrement(prod));
    }

    const decrementHandler = (prod) => {
        dispatch(cartDecrement(prod));
	}
	
	function trimStringToCharacters(inputString, numberOfCharacters) {
		if (inputString.length <= numberOfCharacters) {
			return inputString;
		}

		let trimmedString = inputString.substring(0, numberOfCharacters);

		// Trim the string to the last complete word
		const lastSpaceIndex = trimmedString.lastIndexOf(' ');
		if (lastSpaceIndex !== -1) {
			trimmedString = trimmedString.substring(0, lastSpaceIndex);
		}

		return trimmedString;
	}


	
  return (
		<View style={styles.cartItemCard}>
			<Image source={{ uri: imgsrc }} style={{ width: 30, height: 30 }} />

			<View>
				<Text
					style={{
						fontSize: 14,
						fontFamily: 'Manrope-SemiBold',
						color: Colors.black,
					}}>
					{trimStringToCharacters(name, 15)}
				</Text>
				<Text
					style={{
						fontSize: 14,
						fontFamily: 'Manrope-Regular',
						color: Colors.black,
					}}>
					{'$ '}
					{price}
				</Text>
			</View>

			<View></View>
			<View></View>

			<View style={styles.iconContainer}>
				<TouchableOpacity onPress={() => decrementHandler(id)}>
					<Icon name='minus' type={Icons.Entypo} color='black' size={14} />
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 14,
						color: Colors.black,
						fontFamily: 'Manrope-SemiBold',
					}}>
					{quantity}
				</Text>
				<TouchableOpacity onPress={() => incrementHandler(id)}>
					<Icon name='plus' type={Icons.Entypo} color='black' size={14} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default CartItemCard

const styles = StyleSheet.create({
    cartItemCard: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 25,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
    }
})