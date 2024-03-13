import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function Login({navigation}) {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height
  );
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      {/* Black Section */}
      <View
        style={{
          height: screenHeight / 3,
          backgroundColor: 'black',
          borderBottomRightRadius: 60,
          borderBottomLeftRadius: 60,
        }}
      >
        <View
          style={{
            marginTop: screenHeight / 6,
            marginLeft: screenWidth / 23,
          }}
        >
          <Text
            style={{
              fontFamily: 'Nunito_400Regular',
              fontSize: screenWidth / 20,
              color: 'white',
            }}
          >
            Welcome
          </Text>
          <Text>
            <Text
              style={{
                fontFamily: 'Nunito_900Black',
                fontSize: screenWidth / 9,
                color: 'white',
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>

        {/* End of Welcome Message */}
      </View>

      {/* Feild Input Section */}
      <View>
        {/* Text Input fields */}

        <View
          style={{marginLeft: screenWidth / 23, marginTop: screenHeight / 10}}
        >
          <Text
            style={{fontFamily: 'Nunito_900Black', fontSize: screenWidth / 20}}
          >
            Email :
          </Text>
          <TextInput
            name="email"
            style={{
              width: screenWidth / 1.1,
              height: screenWidth / 8,
              borderRadius: 50,
              borderWidth: 0.22,
              borderColor: 'black',
              paddingLeft: 10,
              backgroundColor: '#F8F8F8',
              shadowColor: 'black',
              shadowOpacity: 0.2,
              shadowRadius: 15,
              elevation: 5,
            }}
          />

          <Text
            style={{
              fontFamily: 'Nunito_900Black',
              fontSize: screenWidth / 20,
              marginTop: screenWidth / 15,
            }}
          >
            Password :
          </Text>
          <TextInput
            name="password"
            style={{
              width: screenWidth / 1.1,
              height: screenWidth / 8,
              borderRadius: 50,
              borderWidth: 0.22,
              borderColor: 'black',
              paddingLeft: 10,
              backgroundColor: '#F8F8F8',
              shadowColor: 'black',
              shadowOpacity: 0.2,
              shadowRadius: 15,
              elevation: 5,
            }}
          />
        </View>

        {/* End of Text Input */}

        {/* Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            alignSelf: 'center',
            marginTop: screenHeight / 15,
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
            elevation: 5,
          }}
        >
          <View
            style={{
              height: screenHeight / 15,
              width: screenWidth / 3,
              backgroundColor: 'black',
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                fontFamily: 'Nunito_900Black',
                fontSize: screenWidth / 20,

                color: 'white',
                alignSelf: 'center',
                paddingTop: screenHeight / 60,
              }}
            >
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
