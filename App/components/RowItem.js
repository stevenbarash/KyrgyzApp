import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginBottom: 1,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export const RowItem = ({onPress = () => {}, name, backgroundImage}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <ImageBackground
      source={backgroundImage}
      style={([{width: '100%', height: '0%'}], styles.row)}>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);
