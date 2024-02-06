import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import data from '../data/FoodData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FoodDetail() {
  const route = useRoute();
  const {item} = route.params;

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

  const [menuQuantity, setMenuQuantity] = useState(1);
  const [menuName, setMenuName] = useState();
  const [name, setName] = useState('');
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const onParentLayout = (event) => {
    const {width, height} = event.nativeEvent.layout;
    setParentDimensions({width, height});
  };

  const filteredData = data.filter((info) => info.key === item);

  // Check if there's a matching item in the filtered data
  const selectedItem = filteredData[0]; // Access the first element of the array

  useEffect(() => {
    // Set the default value of rotiName to the name of the first roti
    if (selectedItem.menu && selectedItem.menu.length > 0) {
      setMenuName(selectedItem.menu[0].name);
      setSelectedMenuId(selectedItem.menu[0].id);
    }
  }, []);

  const handleRotiSelection = (menu) => {
    setMenuName(menu.name);
  };

  const handleQuantityIncrement = (item) => {
    if (menuQuantity < item) {
      setMenuQuantity(menuQuantity + 1);
    } else {
      // Optionally, you can show an alert or provide some feedback to the user
      alert(`You cannot add more than ${item} Quantity.`);
    }
  };

  const handleQuantityDecrement = () => {
    if (menuQuantity > 1) {
      setMenuQuantity(menuQuantity - 1);
    }
  };
  // add to cart functionality
  const handleOrder = async () => {
    // Get the current day
    const currentDay = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
    });

    // Gather all relevant data
    const orderData = {
      itemName: selectedItem.name,
      userName: name,
      day: currentDay, // Add the current day to the order data
    };

    // Check if the selected item has roti information
    if (selectedItem.menu && selectedItem.menu.length > 0) {
      // If yes, include roti-related information in orderData
      orderData.menuName = menuName;
      orderData.menuQuantity = menuQuantity;
    }

    // Retrieve existing orders from AsyncStorage
    let orders = await AsyncStorage.getItem('orders');
    orders = orders ? JSON.parse(orders) : [];

    // Add the new order to the list
    orders.push(orderData);

    // Store the updated orders back to AsyncStorage
    await AsyncStorage.setItem('orders', JSON.stringify(orders));

    // Optionally, you can provide feedback to the user
    alert('Order placed successfully!');
    console.log(orderData);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: screenWidth / 1.05,
            height: screenHeight / 1.9,
            marginTop: screenHeight / 45,
            marginLeft: screenWidth / 45,
          }}
          onLayout={onParentLayout}
        >
          <Image
            source={selectedItem.image}
            style={{
              width: parentDimensions.width,
              height: parentDimensions.height,
              borderRadius: 25,
            }}
          />
        </View>
        <View
          style={{marginLeft: screenWidth / 45, marginTop: screenWidth / 50}}
        >
          <Text
            style={{fontFamily: 'Nunito_900Black', fontSize: screenWidth / 26}}
          >
            {selectedItem.category}
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito_900Black',
              fontSize: screenWidth / 8,
            }}
          >
            {selectedItem.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Nunito_400Regular',
              fontSize: screenWidth / 35,
              margin: screenWidth / 50,
            }}
          >
            {selectedItem.desc}
          </Text>

          {/* Code for getting menu */}
          {selectedItem.menu ? (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: screenWidth / 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: 'Nunito_900Black',
                      fontSize: screenWidth / 20,
                      margin: screenWidth / 50,
                    }}
                  >
                    Select :
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  {selectedItem.menu.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleRotiSelection(item)}
                    >
                      <Text
                        style={{
                          fontFamily: 'Nunito_400Regular',
                          fontSize: screenWidth / 35,
                          margin: screenWidth / 50,
                          width: screenWidth / 5,
                          height: screenWidth / 11,
                          backgroundColor:
                            menuName === item.name ? 'black' : 'white',
                          color: menuName === item.name ? 'white' : 'black',
                          textAlign: 'center',
                          paddingTop: screenWidth / 40,
                          borderColor: 'black',
                          borderWidth: 1,
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              {/* Code for Quantity */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginLeft: screenWidth / 2.9,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: 'Nunito_900Black',
                      fontSize: screenWidth / 30,
                      marginTop: screenWidth / 45,
                    }}
                  >
                    Quantity :
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {/* Plus button design Start */}
                  <TouchableOpacity
                    onPress={() => {
                      const selectedRoti = selectedItem.menu.find(
                        (item) => item.name === menuName
                      );

                      if (selectedRoti) {
                        // Use the selected roti's quantity for further logic
                        const menuQuantity = selectedRoti.quantity;
                        handleQuantityIncrement(menuQuantity);
                      }
                    }}
                  >
                    <View
                      style={{
                        marginLeft: screenWidth / 20,
                        marginTop: screenWidth / 80,
                        width: screenWidth / 20,
                        height: screenWidth / 20,
                        backgroundColor: 'black',
                        borderRadius: 25,
                      }}
                    >
                      <Text
                        style={{color: 'white', paddingLeft: screenWidth / 70}}
                      >
                        +
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {/* Plus button design End */}
                  {/* Quantity Box style Start */}
                  <View
                    style={{
                      width: screenWidth / 7,
                      height: screenWidth / 13,
                      marginLeft: screenWidth / 50,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: 'black',
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginTop: screenHeight / 180,
                        fontFamily: 'Nunito_900Black',
                      }}
                    >
                      {menuQuantity}
                    </Text>
                  </View>
                  {/* Quantity Box style End */}
                  {/* Minus button design Start */}
                  <TouchableOpacity onPress={handleQuantityDecrement}>
                    <View
                      style={{
                        marginLeft: screenWidth / 50,
                        marginTop: screenWidth / 80,
                        width: screenWidth / 20,
                        height: screenWidth / 20,
                        backgroundColor: 'black',
                        borderRadius: 25,
                      }}
                    >
                      <Text
                        style={{color: 'white', paddingLeft: screenWidth / 70}}
                      >
                        -
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {/* Minus button design End */}
                </View>
                {/* End of code for Quantity */}
              </View>
            </View>
          ) : (
            <View />
          )}

          {/* Ending code for getting roti */}
          {/* Name Code */}
          <View
            style={{
              marginLeft: screenWidth / 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: screenWidth / 10,
              marginTop: screenWidth / 20,
            }}
          >
            <Text style={{fontFamily: 'Nunito_900Black', fontSize: 20}}>
              Name:
            </Text>
            <TextInput
              placeholder="Enter Your name"
              onChangeText={(text) => setName(text)}
              value={name}
              style={{
                width: screenWidth / 2,
                height: screenWidth / 11,

                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 25,
                paddingLeft: screenWidth / 50,
                fontFamily: 'Nunito_900Black',
              }}
            />
          </View>
          {/* End of name Code */}
          <View>
            <TouchableOpacity
              style={{alignSelf: 'center', marginTop: screenWidth / 23}}
              onPress={handleOrder}
            >
              <Text
                style={{
                  width: screenWidth / 4,
                  textAlign: 'center',
                  height: screenWidth / 9,
                  backgroundColor: 'black',
                  color: 'white',
                  fontFamily: 'Nunito_900Black',
                  paddingTop: screenWidth / 40,
                }}
              >
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
