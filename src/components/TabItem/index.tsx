import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Svg} from '../../assets';
import {iconColorActive, iconColorInActive} from '../../utils/utils';

const TabItem = (
  index: any,
  isFocused: any,
  onLongPress: any,
  onPress: any,
  options: any,
  label: any,
) => {
  const Icon = () => {
    if (label == 'Home') return isFocused ? <Svg.homeActive /> : <Svg.home />;

    if (label == 'Pesanan')
      return isFocused ? <Svg.pesananActive /> : <Svg.pesanan />;

    if (label == 'Akun') return isFocused ? <Svg.akunActive /> : <Svg.akun />;

    return <Svg.home />;
  };
  return (
    <TouchableOpacity
      key={index}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text
        style={[
          styles.text,
          {color: isFocused ? iconColorActive : iconColorInActive},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    fontSize: 14,
    marginTop: 8,
  },
});
