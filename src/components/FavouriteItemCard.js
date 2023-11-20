import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon, { Icons } from './Icons';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { cartDecrement, cartIncrement } from '../lib/actions/cart';
import { addToCart } from '../lib/actions/cart';
import { wishlistController } from '../lib/actions/wishlist';

const FavouriteItemCard = ({ item}) => {
    const dispatch = useDispatch();
    
    const addToCartHandler = (id) => {
        dispatch(addToCart(id));
    }

    const wishlistHandler = (item) => {
        dispatch(wishlistController(item));
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
			<Image
				source={{ uri: item.thumbnail }}
				style={{ width: 30, height: 30 }}
			/>

			<View>
				<Text
					style={{
						fontSize: 14,
						fontFamily: 'Manrope-SemiBold',
						color: Colors.black,
					}}>
					{trimStringToCharacters(item.title, 15)}
				</Text>
				<Text
					style={{
						fontSize: 14,
						fontFamily: 'Manrope-Regular',
						color: Colors.black,
					}}>
					{'$ '}
					{item.price}
				</Text>
			</View>

			<View></View>
			<View></View>

			<View style={styles.iconContainer}>
				<TouchableOpacity onPress={()=>wishlistHandler(item)}>
					<Icon name='heart' type={Icons.AntDesign} color='#FF8181' size={25} />
				</TouchableOpacity>

				<TouchableOpacity onPress={()=>addToCartHandler(item.id)} >
					<Icon
						name='shopping-cart-checkout'
						type={Icons.MaterialIcons}
						color='black'
						size={25}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default FavouriteItemCard;

const styles = StyleSheet.create({
	cartItemCard: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30,
		paddingTop: 25,
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 25,
	},
});
