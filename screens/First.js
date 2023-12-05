import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, ImageBackground, View} from 'react-native';

const First = () => {
  const navigation = useNavigation();
  const handleNex = () => {
    navigation.navigate('BottomTab');
  };
  return (
    <ImageBackground 
    resizeMode='cover'
    style={{height: "100%"}}
    source={require("../asset/base.jpg")}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100, marginLeft:50, marginRight:50 }}>
            <Text style={{ color: "#31304D", fontSize: 25, fontWeight: 800,}} > SELAMAT DATANG  </Text>
            <Text style={{ color: "black", fontSize: 20, fontWeight: 800, }} > KELUARGAMU NENG NDI? </Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 400, marginLeft:50, marginRight:50 }}>
          <TouchableOpacity style={{backgroundColor: "#31304D", width: 270, height: 33, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }} onPress={handleNex}>
        <Text style={{ color: "white", fontSize: 16}}  > MASUK </Text>
      </TouchableOpacity>  
        </View>
    </ImageBackground>
  );
};

export default First;
