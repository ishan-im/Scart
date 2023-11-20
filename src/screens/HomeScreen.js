import React from 'react';
import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import Icon,{Icons} from '../components/Icons';
import Header from '../components/Header';
import Products from '../components/Products';

const HomeScreen = ({navigation}) => {
  return (
		<ScrollView style={styles.screenContainer}>
			
				<Header />

				<Products />
			
		</ScrollView>
	);
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primaryWhite,
  },
  
});

export default HomeScreen;