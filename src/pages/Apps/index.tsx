import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Pesanan from './Pesanan';
import Akun from './Akun';
import {BottomNavigation} from '../../components';

const Tab = createBottomTabNavigator();
const MainApps = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Akun" component={Akun} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default MainApps;

const styles = StyleSheet.create({});
