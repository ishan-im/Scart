import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	FlatList,
} from 'react-native';
import Colors from '../constants/Colors';
import Icon, { Icons } from './Icons';
import OfferCard from './OfferCard';
import ProductCard from './ProductCard';
import { useFetch } from '../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../lib/actions/cart';

function Products() {
	const dispatch = useDispatch();

	const { data, error, status } = useFetch('https://dummyjson.com/products');
	
 
	useEffect(() => {
		if (data.products) {
			dispatch(addProduct(data.products));
		}
	}, [data]);

	const productItem = useSelector((store) => store.cart.items);

	return (
		<View style={styles.productContainer}>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<OfferCard />
				<OfferCard />
			</ScrollView>

			<Text
				style={{
					color: Colors.black,
					fontSize: 30,
					fontFamily: 'Manrope-Regular',
					paddingTop: 10,
				}}>
				Recommended
			</Text>

			<FlatList
				data={productItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => <ProductCard item={item} />}
			/>
		</View>
	);
}

export default Products;

const styles = StyleSheet.create({
	productContainer: {
		padding: 20,
	},
});
