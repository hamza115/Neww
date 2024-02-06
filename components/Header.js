import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Emoji from 'react-native-emoji';

function Header() {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height
  );
  return (
    <View>
      {/*Starting of header */}
      <View
        style={{
          marginLeft: screenWidth / 15,
          marginTop: screenHeight / 20,
          flexDirection: 'row',
          width: screenWidth,
        }}
      >
        <View>
          <Icon name="menu-outline" size={screenWidth / 12} color="black" />
        </View>

        <View style={{marginLeft: screenWidth / 5, flexDirection: 'row'}}>
          <Icon name="location-outline" size={screenWidth / 12} color="black" />
          <Text
            style={{
              marginTop: screenHeight / 100,
              height: screenHeight / 30,
              marginLeft: screenWidth / 90,
              fontSize: 17,

              fontFamily: 'Nunito_900Black',
            }}
          >
            Desol Int
          </Text>
        </View>

        <View style={{marginLeft: screenWidth / 5}}>
          <Icon name="search-outline" size={screenWidth / 12} color="black" />
        </View>
      </View>
      {/*Ending of header */}
    </View>
  );
}

export default Header;
