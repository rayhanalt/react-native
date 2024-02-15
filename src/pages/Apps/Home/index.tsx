import {Dimensions, StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {Images} from '../../../assets';

import {RFValue} from 'react-native-responsive-fontsize';
import CardOverlay from './card';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.kurirHome} style={styles.Image}></Image>
        <Image source={Images.kurir} style={styles.ImageLogo}></Image>
        <Text style={styles.welcome}>Selamat Datang,</Text>
        <Text style={styles.profile}>Rayhan Althaf</Text>
        <CardOverlay />
      </View>
    </View>
  );
};

export default Home;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    backgroundColor: '#E0F7EF', // Ubah warna latar belakang sesuai kebutuhan Anda
    width: width,
    height: height * 0.3,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    padding: 10, // Tambahkan padding jika diperlukan
    position: 'relative', // Menggunakan posisi relatif agar koordinat 'absolute' dihitung relatif terhadap elemen header
  },
  Image: {
    width: width * 0.39,
    height: height * 0.21,
    alignSelf: 'flex-end',
    top: height * 0.08,
    borderBottomRightRadius: 35,
    // left: 10, // Atur jarak dari kiri layar (left) sesuai kebutuhan Anda
  },
  ImageLogo: {
    width: width * 0.3,
    height: height * 0.069,
    top: height * 0.01,
    position: 'absolute',
    left: 20,
  },
  profile: {
    width: width * 0.3,
    height: height * 0.069,
    top: height * 0.17,
    position: 'absolute',
    left: 30,
    fontSize: RFValue(24, height),
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  welcome: {
    width: width,
    height: height * 0.069,
    top: height * 0.14,
    position: 'absolute',
    left: 30,
    fontSize: RFValue(24, height),
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
  },
});
