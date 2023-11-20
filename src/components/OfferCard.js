import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import Colors from '../constants/Colors';
import Icon, { Icons } from './Icons';


function OfferCard() {
  return (
		<View style={styles.OfferCardContainer}>
			<View styl={styles.offerImageContainer}>
				<Image
					style={styles.offerImage}
					source={require('../../assets/icons/Image_Icon.png')}
				/>
			</View>

			<View>
				<Text
					style={{
						color: Colors.primaryWhite,
						fontSize: 20,
						fontFamily: 'Manrope-Regular',
					}}>
					Get
				</Text>
				<Text
					style={{
						color: Colors.primaryWhite,
						fontSize: 30,
						fontFamily: 'Manrope-Bold',
					}}>
					50% OFF
				</Text>
				<Text
					style={{
						color: Colors.primaryWhite,
						fontSize: 12,
						fontFamily: 'Manrope-Regular',
					}}>
					On first 3 orders
				</Text>
			</View>
		</View>
	);
}

export default OfferCard

const styles = StyleSheet.create({

    OfferCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.primaryYellow,
        borderRadius: 16,
        height: 105,
        width: 269,
        marginRight: 20,
    },

    offerImageContainer: {
        justifyContent: 'center',
        padding:18,
    
    },

    offerImage: {
        width: 68,
        height: 68,
    },

})