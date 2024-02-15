import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {Images} from '../../../assets';
import {RFValue} from 'react-native-responsive-fontsize';

const CardOverlay = () => {
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <View style={styles.rowParent}>
          <View style={styles.column}>
            <View style={styles.column}>
              <View style={styles.rowText}>
                <Text style={styles.textRegularSaldo}>Saldo:</Text>
                <Text style={styles.textBold}>Rp.100.000</Text>
              </View>
              <View style={styles.rowText}>
                <Text style={styles.textRegularAntar}>Antar Point:</Text>
                <Text style={styles.textRegularPoint}>100 point</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.columnTombol}>
              <View style={styles.imageContainer}>
                <Image source={Images.bill} style={styles.images}></Image>
              </View>
              <Text style={styles.textRegular}>Add Saldo</Text>
            </View>
            <View style={styles.columnTombol}>
              <View style={styles.imageContainer}>
                <Image source={Images.outcome} style={styles.images}></Image>
              </View>
              <Text style={styles.textRegular}>Get Point</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardOverlay;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: width,
    height: height,
    paddingHorizontal: 30,
    top: height * 0.25,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: height * 0.1,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Memberikan ruang fleksibel di antara elemen-elemen
    alignItems: 'center',
    gap: 10,
    //     paddingHorizontal: 20, // Mengatur padding horizontal untuk memberikan ruang di pinggir layar
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rowParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  images: {
    width: width * 0.09,
    height: height * 0.041,
  },
  columnTombol: {
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.35, // Memberikan lebar penuh agar bisa diatur jarak antar elemen
  },
  imageContainer: {
    backgroundColor: '#E0F7EF',
    borderRadius: 10,
    padding: 4,
    alignItems: 'center',
  },
  textRegular: {
    fontSize: RFValue(10, height),
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
  },
  textBold: {
    fontSize: RFValue(20, height),
    fontFamily: 'TitilliumWeb-Bold',
    color: 'black',
  },
  textRegularSaldo: {
    fontSize: RFValue(20, height),
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
  },
  textRegularAntar: {
    fontSize: RFValue(12, height),
    fontFamily: 'TitilliumWeb-Regular',
    color: 'black',
  },
  textRegularPoint: {
    fontSize: RFValue(12, height),
    fontFamily: 'TitilliumWeb-Bold',
    color: '#55CB95',
  },
});
