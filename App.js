import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Intro from './pages/Intro';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';
import {useFonts} from 'expo-font';
import Testing from './pages/Testing';
import FoodDetail from './components/FoodDetail';
import Login from './pages/Login';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });
  useEffect(() => {
    const hideSplash = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Additional initialization code, if any
        // ...
        // Now you can hide the splash screen
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    if (fontsLoaded) {
      hideSplash();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // Return a loading indicator or placeholder if fonts are not yet loaded
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            gestureEnabled: false, // Disable swipe back gesture for this screen
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{
            gestureEnabled: false, // Disable swipe back gesture for this screen
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            gestureEnabled: false, // Disable swipe back gesture for this screen
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetail}
          options={{
            headerBackTitleVisible: false,
            title: false,
            headerShadowVisible: false,
            headerTintColor: 'black',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
