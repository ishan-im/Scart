import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';
import Icon, { Icons } from './Icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { cartIncrement, cartDecrement, addToCart, removeItem } from '../lib/actions/cart';
import { wishlistController } from '../lib/actions/wishlist';

const ProductCard = ({item}) => {
	
	const navigation = useNavigation();

	const dispatch = useDispatch();

	const addToCartHandler = (id) => {
		dispatch(addToCart(id));
	}

	const wishlistHandler = (item) => {
		dispatch(wishlistController(item));
	}
	
	const wishlist = useSelector((store) => store.wishlist.wishlistItems);
	const isInWishlist = wishlist.some((prod) => item.id === prod.id);
	

	// check if the item is in the wishlist

	
  return (
		<TouchableOpacity
			style={styles.ProductCardContainer}
			onPress={() => navigation.navigate('Details', item)}>
			<TouchableOpacity onPress={() => wishlistHandler(item)}>
				<Icon
					name={isInWishlist === true ? 'heart' : 'hearto'}
					type={Icons.AntDesign}
					color={isInWishlist === true ? '#FF8181' : 'black'}
				/>
			</TouchableOpacity>

			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				<Image
					style={styles.productImage}
					source={
						!item.thumbnail
							? require('../../assets/icons/Image_Icon.png')
							: { uri: item.thumbnail }
					}
				/>
			</View>
			<View style={styles.productContentConntainer}>
				<View>
					<Text
						style={{
							color: Colors.black,
							fontSize: 14,
							fontFamily: 'Manrope-SemiBold',
						}}>
						{'$ '} {item.price}
					</Text>

					<Text
						style={{
							color: Colors.primaryOffWhite,
							fontSize: 12,
							fontFamily: 'Manrope-Regular',
						}}>
						{item.title}
					</Text>
				</View>
				<TouchableOpacity onPress={() => addToCartHandler(item.id)}>
					<Icon name='pluscircle' type={Icons.AntDesign} color={Colors.blue} />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
}

export default ProductCard

const styles = StyleSheet.create({

    ProductCardContainer: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        height: 194,
        width: 160,
		marginRight: 20,
		
    },
    productImage: {
        width: 80,
        height: 80,
        flexDirection: 'row',
		alignContent: 'center',
		marginTop:5
    },
    productContentConntainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },

})