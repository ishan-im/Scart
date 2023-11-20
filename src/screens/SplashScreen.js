import { StyleSheet, Text, View ,Image} from 'react-native'
import React,{useEffect} from 'react'
import Colors from '../constants/Colors';

const SplashScreen = ({ navigation }) => {
    
useEffect(() => {
	setTimeout(() => {
		navigation.navigate('Tab1');
	}, 3000);
}, []);


  return (
		<View style={styles.container}>
			

			
				<Image
					source={require('../../assets/icons/original_icon.png')}
					style={styles.imageStyle}
					resizeMode='cover'
				/>
		
		</View>
	);
}

export default SplashScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 30,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
	},

	
	imageStyle: {
		width: 100,
		height: 100,
	},
});