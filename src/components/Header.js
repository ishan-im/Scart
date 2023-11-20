import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	KeyboardAvoidingView,
	Pressable,
	TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import Icon, { Icons } from './Icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
	const navigation = useNavigation();
	const cart = useSelector((store) => store.cart.addedItems.length);

	return (
		<View style={styles.headerContainer}>
			<View style={styles.headerContent}>
				<Text style={styles.text}>Hey, User</Text>

				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => navigation.navigate('Cart')}>
					<Image
						style={styles.cartImage}
						source={require('../../assets/icons/bag_.png')}
					/>

					{cart> 0 && (
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
								borderColor: Colors.blue,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Text style={{ color: Colors.primaryWhite }}>{cart}</Text>
						</View>
					)}
				</TouchableOpacity>
			</View>

			<View style={styles.headerInput}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.searchIcon}
						source={require('../../assets/icons/Search.png')}
					/>
				</View>
				<View style={styles.inputPlaceHolder}>
					<TextInput
						placeholder='Search Products or Store'
						placeholderTextColor='#8891A5'
						style={{ color: Colors.white, fontSize: 14 }}
					/>
				</View>
			</View>

			<View style={styles.userInformationContainer}>
				<View>
					<Text style={{ color: Colors.primaryOffWhite, fontSize: 11 }}>
						DELIVERY TO
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text
							style={{
								color: Colors.primaryWhite,
								fontSize: 14,
								fontWeight: 500,
							}}>
							Kathmandu, Nepal
						</Text>
						<Icon
							name='chevron-down'
							type={Icons.EvilIcons}
							color={Colors.white}
						/>
					</View>
				</View>

				<View>
					<Text style={{ color: Colors.primaryOffWhite, fontSize: 11 }}>
						Within
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Text
							style={{
								color: Colors.primaryWhite,
								fontSize: 14,
								fontWeight: 500,
							}}>
							1 Hour
						</Text>
						<Icon
							name='chevron-down'
							type={Icons.EvilIcons}
							color={Colors.white}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: Colors.blue,
		height: 252,
	},
	headerContent: {
		paddingHorizontal: 20,
		paddingVertical: 42,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cartImage: {
		width: 20,
		height: 20,
	},
	headerInput: {
		marginHorizontal: 20,
		height: 50,
		borderRadius: 28,
		flexDirection: 'row',
		backgroundColor: Colors.primaryBlue,
	},
	imageContainer: {
		justifyContent: 'center',
		padding: 18,
	},
	inputPlaceHolder: {
		color: Colors.primaryWhite,
		backgroundColor: Colors.primaryBlue,
		borderRadius: 28,

		justifyContent: 'center',
	},
	searchIcon: {
		width: 15,
		height: 15,
	},

	text: {
		color: Colors.primaryWhite,
		fontSize: 22,
		fontFamily: 'Manrope-SemiBold',
	},

	userInformationContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
});
