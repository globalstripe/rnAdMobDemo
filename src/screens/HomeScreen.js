import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import { RewardedAd, GAMBannerAd, BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// https://championuzoma.hashnode.dev/setting-up-google-admob-ads-with-react-native

const HomeScreen = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 1}}>
      <BannerAd
      unitId={"ca-app-pub-6964741882714582/6185411345"}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
     />
     </View>
    <View style={styles.container}>
      <Text>OK - here is our basic AdsMob App</Text>
      <Text>with Header and Footer Banner Ads</Text>

      <Button
        style={{marginTop: 10, marginBottom: 10}}
        onPress={()=>navigation.navigate("Details")}
        title="Go to Details Screen"
      />
      
   
      <StatusBar style="auto" />


     </View>
     <View style={{marginBottom: 50}}>
     <BannerAd
      unitId={"ca-app-pub-6964741882714582/7345012988"}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }} 
      
     />
     </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})



export default HomeScreen;
