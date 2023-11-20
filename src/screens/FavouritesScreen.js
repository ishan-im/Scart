import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icon,{Icons} from '../components/Icons'
import { useSelector, useDispatch } from 'react-redux';
import FavouriteItemCard from '../components/FavouriteItemCard';

const FavouritesScreen = ({navigation}) => {

  const favouriteItems = useSelector((store) => store.wishlist.wishlistItems);

  console.log('favouriteItems',favouriteItems)

  return (
    <View style={styles.FavouritesScreenContainer}>

      {
        favouriteItems.length > 0 ? (
          <FlatList
							data={favouriteItems}
							keyExtractor={(item) => item.id}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => (
								<FavouriteItemCard
									item={item}
								/>
							)}/>
        ) : (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Icon name='hearto' type={Icons.AntDesign} color={Colors.black} size={50}/>
            <Text style={{fontSize:20,fontFamily:'Manrope-Medium',color:Colors.black}}>No Favourites</Text>
          </View>
        )
      }
      
    </View>
  )
}

export default FavouritesScreen

const styles = StyleSheet.create({
  FavouritesScreenContainer:{
    flex:1,
    padding: 20,
    backgroundColor: Colors.primaryWhite,
   
  }
})