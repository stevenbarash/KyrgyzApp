import React from 'react';
import {ScrollView, StatusBar} from 'react-native';

// import spaceQuestions from '../data/space';
// import westernsQuestions from '../data/westerns';
// import computerQuestions from '../data/computers';
import unit1 from '../data/unit1';
import unit2 from '../data/unit2';
import food from '../data/food';

import {RowItem} from '../components/RowItem';
var background1 = require('../assets/kyrgyz-background-1.jpg');
var background2 = require('../assets/kyrgyz-background-2.jpg');

export default ({navigation}) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Unit 1"
      backgroundImage={{
        uri:
          'https://img1.10bestmedia.com/Images/Photos/362980/10KK1yurt1AAAA_54_990x660.jpg',
      }}
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Unit 1',
          backgroundImage: {
            uri:
              'https://www.wildernesstravel.com/images/trips/asia/kyrgyzstan/kyrgyzstan-hiking-in-the-celestial-mountains/1-slide-kyrgysztan-yurts-at-tash-raba-med.jpg',
          },
          questions: unit1,
        })
      }
    />
    <RowItem
      name="Unit 2"
      backgroundImage={{
        uri:
          'https://www.wildernesstravel.com/images/trips/asia/kyrgyzstan/kyrgyzstan-hiking-in-the-celestial-mountains/1-slide-kyrgysztan-yurts-at-tash-raba-med.jpg',
      }}
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Unit 2',
          backgroundImage: {
            uri:
              'https://www.wildernesstravel.com/images/trips/asia/kyrgyzstan/kyrgyzstan-hiking-in-the-celestial-mountains/1-slide-kyrgysztan-yurts-at-tash-raba-med.jpg',
          },

          questions: unit2,
        })
      }
    />
    <RowItem
      name="Food"
      backgroundImage={{
        uri:
          'https://image.shutterstock.com/image-photo/concept-oriental-cuisine-homemade-uzbek-260nw-1113207065.jpg',
      }}
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Food',
          backgroundImage: {
            uri:
              'https://www.wildernesstravel.com/images/trips/asia/kyrgyzstan/kyrgyzstan-hiking-in-the-celestial-mountains/1-slide-kyrgysztan-yurts-at-tash-raba-med.jpg',
          },

          questions: food,
        })
      }
    />
    {/* <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Computers',
          questions: computerQuestions,
        })
      }
    /> */}
  </ScrollView>
);
