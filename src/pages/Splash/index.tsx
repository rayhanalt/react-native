import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Image,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Images} from '../../assets';

const {height} = Dimensions.get('window');

const Splash = ({navigation}: {navigation: any}) => {
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bounceValue, {
      toValue: 1,
      duration: 1000, // Durasi animasi dalam milidetik
      useNativeDriver: true,
      easing: Easing.linear, // Gunakan easing bounce
    }).start(() => {
      setTimeout(() => {
        navigation.replace('MainApps');
      }, 3000); // Tunggu 1 detik sebelum navigasi ke halaman berikutnya
    });
  }, [bounceValue, navigation]);

  return (
    <ImageBackground
      source={Images.bgkurir}
      style={styles.ImageBackground}
      height={height / 4}>
      <Animated.Image
        source={Images.kurir}
        style={[styles.logo, {transform: [{scale: bounceValue}]}]}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F7EF',
  },
  logo: {
    alignContent: 'center',
    width: 222,
    height: 185,
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'visible',
  },
});
