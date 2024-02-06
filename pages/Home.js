import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Emoji from 'react-native-emoji';
import Header from '../components/Header';
import Card from '../components/Card';
import Menu from '../components/Menu';
import Food from '../components/Food';

export default function Home() {
  const [show, setShow] = useState({});

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height
  );

  return (
    <View style={{backgroundColor: 'white'}}>
      <Header />
      <Card />
      <Menu setShow={setShow} />
      <Food show={show} />
      {/*Starting of Header image */}
    </View>
  );
}
