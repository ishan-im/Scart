import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
	return <RootNavigator />;
}

const styles = StyleSheet.create({
	manropeBold: {
		fontFamily: 'Manrope-Bold',
		fontSize: 30,
		color: 'green',
	},
});

export default App;
