import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import Colors from '../constants/Colors';
import Icon, { Icons } from '../components/Icons';
import StarRating from 'react-native-star-rating';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../lib/actions/cart';
import { wishlistController } from '../lib/actions/wishlist';
import CarouselCards from '../components/Carousel/CarouselCards';

const DetailScreen = ({ route, navigation }) => {
	const items = route.params;
	const cart = useSelector((store) => store.cart.addedItems.length);

	
const wishlist = useSelector((store) => store.wishlist.wishlistItems);
const isInWishlist = wishlist.some((prod) => items.id === prod.id);


	const dispatch = useDispatch();

	const addToCartHandler = (id) => {
		dispatch(addToCart(id));
	}

	const wishlistHandler = (item) => {
		dispatch(wishlistController(item));
	};

	const handleBuyNow = (id) => { 
        dispatch(addToCart(id));
		navigation.navigate('Cart');

	}

	return (
		<View style={styles.screenContainer}>
			<View style={styles.backButtonContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<Icon name='chevron-left' type={Icons.Feather} color={Colors.black} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
					<Image source={require('../../assets/icons/bag.png')} />
					{cart > 0 && (
						<View
							style={{
								width: 24,
								height: 24,
								backgroundColor: Colors.primaryYellow,
								borderRadius: 99,
								position: 'absolute',
								top: -12,
								right: -12,
								borderWidth: 2,
								borderColor: Colors.primaryWhite,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Text style={{ color: Colors.primaryWhite }}>{cart}</Text>
						</View>
					)}
				</TouchableOpacity>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View>
						<Text style={styles.title}>{items.title}</Text>
						<Text style={{ color: Colors.primaryGray, fontSize: 12 }}>
							{items.category}
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<StarRating
						disabled={true}
						maxStars={5}
						fullStarColor={Colors.yellow}
						emptyStarColor={Colors.black}
						rating={items.rating}
						containerStyle={{ marginTop: 10, paddingVertical: 10 }}
						starSize={16}
					/>
					<View
						style={{
							justifyContent: 'center',
							position: 'absolute',
							left: 80,
							bottom: 11,
						}}>
						<Text
							style={{
								color: Colors.primaryOffWhite,
								fontSize: 12,
							}}>
							{items.rating} Reviews
						</Text>
					</View>
				</View>

				<TouchableOpacity
					style={styles.heartContainer}
					onPress={() => wishlistHandler(items)}>
					<Icon
						name={isInWishlist === true ? 'heart' : 'hearto'}
						type={Icons.AntDesign}
						color={isInWishlist === true ? '#FF8181' : 'black'}
						size={24}
					/>
				</TouchableOpacity>

				<View style={{ marginTop: 25 }}>
					<CarouselCards data={items.images} />
				</View>

				<View
					style={{
						marginTop: 20,
						flexDirection: 'row',
						gap: 15,
						alignItems: 'center',
					}}>
					<Text
						style={{
							fontFamily: 'Manrope-SemiBold',
							fontSize: 16,
							color: Colors.blue,
						}}>
						$ {items.price}
					</Text>

					<View
						style={{
							backgroundColor: Colors.blue,
							borderRadius: 15,
							alignItems: 'center',
						}}>
						<Text
							style={{
								fontFamily: 'Manrope-SemiBold',
								fontSize: 12,
								color: Colors.white,
								textAlign: 'center',
								padding: 4,
							}}>
							{items.discountPercentage} % OFF
						</Text>
					</View>
				</View>

				<View style={styles.btnContainer}>
					<TouchableOpacity
						style={styles.cartbuttonStyle}
						onPress={() => addToCartHandler(items.id)}>
						<Text style={styles.cartbuttonTextStyle}>Add to cart</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.buybuttonStyle}
						onPress={() => handleBuyNow(items.id)}>
						<Text style={styles.buttonTextStyle}>Buy Now</Text>
					</TouchableOpacity>
				</View>

				<View style={{ marginTop: 20, paddingVertical: 20 }}>
					<Text
						style={{
							fontFamily: 'Manrope-Medium',
							fontSize: 16,
							color: Colors.black,
						}}>
						Details
					</Text>

					<Text
						style={{
							fontFamily: 'Manrope-Regular',
							fontSize: 12,
							color: Colors.primaryGray,
							marginTop: 10,
						}}>
						{items.description}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: Colors.primaryWhite,
		padding: 20,
	},
	backButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 25,
	},
	title: {
		fontSize: 50,
		fontFamily: 'Manrope-regular',
		color: Colors.black,
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	buybuttonStyle: {
		height: 56,
		width: 169,
		marginTop: 32,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.blue,
		borderRadius: 20,
	},
	cartbuttonStyle: {
		height: 56,
		width: 169,
		marginTop: 32,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.primaryWhite,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: Colors.blue,
	},
	cartbuttonTextStyle: {
		color: Colors.blue,
		fontFamily: 'Manrope-SemiBold',
		fontSize: 14,
	},

	buttonTextStyle: {
		color: Colors.primaryWhite,
		fontFamily: 'Manrope-SemiBold',
		fontSize: 14,
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},
	heartContainer: {
		position: 'relative',
		left: '90%',
	}
});

export default DetailScreen;
