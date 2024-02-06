import React, {useState, useEffect} from 'react';
import {Text, View, Image, SafeAreaView, Dimensions} from 'react-native';

export default function Intro({navigation}) {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height
  );

  useEffect(() => {
    // Set a timeout to navigate to the new screen after 3000 milliseconds (3 seconds)
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    // Clear the timeout to prevent navigation if the component unmounts before the timeout
    return () => clearTimeout(timeout);
  }, [navigation]);

  // Continue with the rest of your component
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: screenHeight}}>
      <View>
        <View style={{height: screenHeight / 1.5, width: screenWidth / 1}}>
          <Image
            source={require('../assets/newwww.png')}
            style={{
              width: screenWidth / 1,
              height: screenHeight / 2.3,
              marginTop: screenHeight / 6,
              marginLeft: screenWidth / 250,
              shadowOpacity: 15,
              shadowColor: 'black',
              shadowOffset: {width: 1, height: 6},
            }}
          />
          <Text
            style={{
              fontSize: screenWidth / 9,
              textAlign: 'center',
              letterSpacing: 10,
              color: 'black',
              fontFamily: 'Nunito_900Black',
            }}
          >
            DesolInt
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
