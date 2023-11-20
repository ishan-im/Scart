import React from 'react'

import { View,Text ,StyleSheet} from 'react-native';

function Screen4({navigation}) {
  return (
    <View style={styles.user}>
      <Text style={{fontSize:20, color:'black'}}>Authenticating user soon </Text>
    </View>
  )
}

export default Screen4

export const styles = StyleSheet.create({
  user:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})