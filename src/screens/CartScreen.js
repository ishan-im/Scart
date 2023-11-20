import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import Icon, { Icons } from '../components/Icons';
import StarRating from 'react-native-star-rating';
import { useSelector, useDispatch } from 'react-redux';
import CartItemCard from '../components/CartItemCard';

const CartScreen = ({ navigation }) => {
	const cart = useSelector((store) => store.cart.addedItems.length);

	const cartItems = useSelector((store) => store.cart.addedItems);

	const total = useSelector((store) => store.cart.total);

	console.log('total', total);

	console.log('cart', cartItems);

	return (
		<View style={styles.CartScreenContainer}>
			<View style={styles.headContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<Icon name='chevron-left' type={Icons.Feather} color={Colors.black} />
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 16,
						fontFamily: 'Manrope-Medium',
						color: Colors.black,
					}}>
					Shopping Cart ({cart})
				</Text>

				<View></View>
				<View></View>
				<View></View>
				<View></View>
				<View></View>
				<View></View>
			</View>

			{
				total >0 ? (<>
					<View style={styles.cartItemCardContainer}>
						<FlatList
							data={cartItems}
							keyExtractor={(item) => item.id}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => (
								<CartItemCard
									id={item.id}
									imgsrc={item.thumbnail}
									name={item.title}
									price={item.price}
									quantity={item.totalItem}
								/>
							)}
							ListFooterComponent={
								<>
									<View style={styles.footerContainer}>
										<Text style={styles.leftPrice}>Subtotal</Text>
										<Text style={styles.rightPrice}>$ {total}</Text>
									</View>

									<View style={styles.footerContainer}>
										<Text style={styles.leftPrice}>Delivery</Text>
										<Text style={styles.rightPrice}>$ 20</Text>
									</View>

									<View style={styles.footerContainer}>
										<Text style={styles.leftPrice}>Total</Text>
										<Text style={styles.rightPrice}>$ {total + 20}</Text>
									</View>

									<TouchableOpacity style={styles.checkOutButton}>
										<Text
											style={{
												color: Colors.white,
												fontFamily: 'Manrope-SemiBold',
												fontSize: 14,
											}}>
											Proceed To Checkout
										</Text>
									</TouchableOpacity>
								</>
							}
						/>
					</View>

					
				</>) : (
					<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
						<Text style={{fontSize: 20, fontFamily:'Manrope-SemiBold', color:Colors.black}}>Cart is empty :(</Text>
					</View>
				)
			}
		</View>
	);
};

export default CartScreen;

const styles = StyleSheet.create({
	CartScreenContainer: {
		flex: 1,
		backgroundColor: Colors.primaryWhite,
		padding: 20,
	},
	headContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 25,
	},

	cartItemCardContainer: {
		marginTop: 20,
		paddingVertical: 20,
	},

	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	leftPrice: {
		fontSize: 14,
		fontFamily: 'Manrope-Regular',
		color: Colors.primaryGray,
	},
	rightPrice: {
		fontSize: 14,
		fontFamily: 'Manrope-SemiBold',
		color: Colors.black,
	},
	checkOutButton: {
		height: 56,
		width: '100%',
		marginTop: 32,
		marginBottom: 45,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.blue,
		borderRadius: 20,
	}
});
