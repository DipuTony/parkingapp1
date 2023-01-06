import * as React from 'react';
import { Button, View, BackHandler, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Screens/LoginScreen';
import WebViewIndex from './src/Screens/WebViewIndex';
import Sidebar from './src/Components/CustomDrawer';
import { createStackNavigator } from '@react-navigation/stack';
import { About } from './src/Screens/About'
import {useEffect} from 'react-native'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();





function MyStack() {
  return (
    // <Stack.Navigator>
    <>
      <Stack.Screen name="Home" component={About} />
      <Stack.Screen
        name="Profile"
        component={LoginScreen}
        options={{ cardStyleInterpolator: forFade }}
      />
    </>
    // </Stack.Navigator>
  );
}

const AppDrawer = () => {
  return (
    // <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      // options={{}}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Web View" component={WebViewIndex} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default function App() {

  //====================== On Press back ask to exit

React.useEffect(() => {
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    () => {
      // Show a prompt asking the user if they want to exit the app
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => { },
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
          }
        ],
        {
          cancelable: false
        }
      );
      return true;
    }
  );

  return () => backHandler.remove();
}, []);

// ===================== End ask to ed


  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
