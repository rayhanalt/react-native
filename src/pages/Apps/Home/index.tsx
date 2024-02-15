import {Dimensions, StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {Images} from '../../../assets';

import {RFValue} from 'react-native-responsive-fontsize';

const Home = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.kurirHome} style={styles.Image}></Image>
      <Image source={Images.kurir} style={styles.ImageLogo}></Image>
      <Text style={styles.welcome}>Selamat Datang,</Text>
      <Text style={styles.profile}>Rayhan Althaf</Text>
    </View>
  );
};

export default Home;

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E0F7EF', // Ubah warna latar belakang sesuai kebutuhan Anda
    width: windowsWidth,
    height: windowsHeight * 0.3,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    padding: 10, // Tambahkan padding jika diperlukan
    position: 'relative', // Menggunakan posisi relatif agar koordinat 'absolute' dihitung relatif terhadap elemen header
  },
  Image: {
    width: windowsWidth * 0.39,
    height: windowsHeight * 0.21,
    alignSelf: 'flex-end',
    top: windowsHeight * 0.08,
    borderBottomRightRadius: 35,
    // left: 10, // Atur jarak dari kiri layar (left) sesuai kebutuhan Anda
  },
  ImageLogo: {
    width: windowsWidth * 0.3,
    height: windowsHeight * 0.069,
    top: windowsHeight * 0.01,
    position: 'absolute',
    left: 10,
  },
  profile: {
    width: windowsWidth * 0.3,
    height: windowsHeight * 0.069,
    top: windowsHeight * 0.17,
    position: 'absolute',
    left: 10,
    fontSize: RFValue(24, windowsHeight),
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  welcome: {
    width: windowsWidth,
    height: windowsHeight * 0.069,
    top: windowsHeight * 0.14,
    position: 'absolute',
    left: 10,
    fontSize: RFValue(24, windowsHeight),
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
  },
});
