import React, {useState} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';

export default function Card() {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height
  );
  return (
    <View
      style={{
        width: screenWidth / 1.095,
        height: screenHeight / 3.9,
        backgroundColor: 'black',
        marginLeft: screenWidth / 23,
        marginTop: screenHeight / 50,
        borderRadius: 33,
        flexDirection: 'row',
      }}
    >
      {/*For Text */}
      <View style={{width: screenWidth / 2, height: screenHeight / 3.9}}>
        <Text
          style={{
            fontFamily: 'Nunito_900Black',
            fontSize: screenWidth / 17,
            marginLeft: screenWidth / 15,
            marginTop: screenHeight / 15,
            color: 'white',
          }}
        >
          Welcome to <Text style={{color: 'red'}}>Desol Int</Text> Family
        </Text>
      </View>
      {/*For Image */}
      <View>
        <Image
          source={require('../assets/motor.png')}
          style={{
            marginTop: screenHeight / 42,
            width: screenWidth / 2.5,
            height: screenHeight / 6,
          }}
        />
      </View>
    </View>
  );
}
