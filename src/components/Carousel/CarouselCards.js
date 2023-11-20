import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Image } from 'react-native-animatable';
import Carousel from 'react-native-reanimated-carousel';

function Index({data}) {
	const width = Dimensions.get('window').width;
	return (
		<View>
			<Carousel
				loop
				width={width * 0.9}
				height={width / 2}
				autoPlay={true}
				data={data}
				scrollAnimationDuration={3000}
				renderItem={({ index, item }) => (
					<View
						style={{
							justifyContent: 'center',
							
						}}>
						<Image
							source={{ uri: item }}
							style={{ width: width, height: width / 2 }}
						/>
					</View>
				)}
			/>
		</View>
	);
}

export default Index;
