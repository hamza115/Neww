import React, {useState} from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import data from '../data/FoodData';

export default function Food({show}) {
  const navigation = useNavigation();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height
  );

  const [parentDimensions, setParentDimensions] = useState({
    width: 0,
    height: 0,
  });

  const onParentLayout = (event) => {
    const {width, height} = event.nativeEvent.layout;
    setParentDimensions({width, height});
  };
  const filteredData = data.filter((item) => item.day_id === show.id); // Filter data based on selectedId

  const handleNavigate = (item) => {
    navigation.navigate('FoodDetail', {item});
  };
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleNavigate(item.key)}>
      <View
        style={{
          flex: 1,
          width: screenWidth / 2.3,
          height: screenHeight / 3,
          backgroundColor: '#f5f5f5',
          borderRadius: 20,
          marginVertical: screenHeight / 100,
          marginLeft: screenWidth / 24,
          shadowOpacity: 0.3,
          shadowColor: 'black',
          shadowOffset: {width: 1, height: 1},
        }}
        onLayout={onParentLayout}
      >
        <View
          style={{
            marginLeft: parentDimensions.width / 23,
            marginTop: parentDimensions.height / 50,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: parentDimensions.width / 1.1,
              height: parentDimensions.height / 1.3,
              borderRadius: 15,
            }}
          />
          <Text
            style={{
              fontFamily: 'Nunito_900Black',
              fontSize: screenWidth / 18,
              marginTop: screenHeight / 70,
            }}
          >
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{marginTop: screenHeight / 50}}>
      <Text
        style={{
          fontFamily: 'Nunito_900Black',
          fontSize: screenWidth / 16,
          marginLeft: screenWidth / 20,
        }}
      >
        Food
      </Text>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        style={{height: screenHeight / 2.4}}
      />
    </View>
  );
}
