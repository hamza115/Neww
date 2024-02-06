import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import data from '../data/MenuData';

export default function Menu({setShow}) {
  const date = new Date().getDay() - 1;

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height
  );
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Set the initial value of count to the key of the first element
    setCount(data[date].key);
  }, []);

  useEffect(() => {
    // This code will run aftr each state update
    // This code will ru after each stae update
    if (count !== null) {
      setShow({id: count});
    }
  }, [count]);

  const handlePress = (key) => {
    setCount(key);

    // navigation.navigate('Food', {selectedId: key});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handlePress(item.key)}
      disabled={count !== item.key}
    >
      {/*Main view of menu contaiing the width and height */}
      <View
        style={{
          flexDirection: 'row',
          flex: 0, // Set flex to 0 to allow the width to be based on content
          height: screenHeight / 14,
          backgroundColor: count === item.key ? 'black' : '#f6f6f6',
          borderRadius: 50,
          marginLeft: screenWidth / 23,
          marginTop: screenHeight / 50,
          paddingRight: screenWidth / 20, // Optional: Add padding to the left and right for better visual appearance
        }}
      >
        {/*White circle */}
        <View
          style={{
            width: screenWidth / 8.1,
            height: screenHeight / 19,
            backgroundColor: count === item.key ? 'white' : 'white', // Different background color for selected and non-selected items
            marginTop: screenHeight / 120,
            marginBottom: screenHeight / 34,
            borderRadius: 50,
            marginLeft: screenWidth / 45,
          }}
        >
          {/*Image */}
          <Image
            source={item.image}
            style={{
              width: screenWidth / 12.0,
              height: screenHeight / 26,
              marginLeft: screenWidth / 50,
              marginTop: screenHeight / 150,
            }}
          />
        </View>
        {/*Text */}
        <Text
          style={{
            fontFamily: 'Nunito_900Black',
            color: count === item.key ? 'white' : 'black', // Different text color for selected and non-selected items
            fontSize: screenWidth / 23,
            marginTop: screenHeight / 50,
            marginLeft: screenWidth / 45,
          }}
        >
          {item.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <View>
        <Text
          style={{
            fontFamily: 'Nunito_900Black',
            fontSize: screenWidth / 16,
            marginLeft: screenWidth / 20,
            marginTop: screenHeight / 50,
          }}
        >
          Categories
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
