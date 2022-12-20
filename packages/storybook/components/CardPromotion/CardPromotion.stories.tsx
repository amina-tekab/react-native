import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardPromotion from './CardPromotion';
import { Button, Text, View, Image, ImageBackground } from 'react-native';
const CardFoodMeta: ComponentMeta<typeof CardPromotion> = {
  title: 'CardPromotion ',
  component: CardPromotion,
  argTypes: {},
  args: {
    imageBackground: (
      <ImageBackground
        imageStyle={{ borderRadius: 25 }}
        source={require('../../../storybook/assets/burger.png')}
        // imageRef={require('../../../storybook/assets/burger.png')}
        style={{
          minHeight: '200px',
          width: '437px',
        }}
      >
        <View>
          <Text
            style={{
              color: '#9B9B9B',
              fontWeight: '500',

              marginTop: 20,
              marginLeft: 22,
              fontSize: 17,
              // fontFamily: 'Inter',
            }}
          >
            Get Special Discount
          </Text>
        </View>

        <Text
          style={{
            color: 'white',
            fontFamily: 'Inria Serif',
            fontSize: 35,
            marginLeft: 22,
            marginTop: 10,
            fontWeight: '700',
          }}
        >
          up to 75%
        </Text>

        <View
          style={{
            marginRight: 50,
            marginTop: 31,
            backgroundColor: 'white',
            width: 101,
            height: 24,
            marginLeft: 22,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 13,
              color: '#010E16',
              marginTop: 3,
            }}
          >
            Claim Voucher
          </Text>
        </View>
      </ImageBackground>
    ),
  },
};
export default CardFoodMeta;

type CardPromotionStory = ComponentStory<typeof CardPromotion>;
export const Basic: CardPromotionStory = (args) => <CardPromotion {...args} />;
export const CardType2: CardPromotionStory = (args) => <CardPromotion {...args} />;
export const CardType3: CardPromotionStory = (args) => <CardPromotion {...args} />;
CardType2.args = {
  background: '#FA5A00',

  borderRadius: 20,
  height: 154,

  width: 343,
  ...Basic.args,
  title: (
    <Text
      style={{
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 170,
        marginTop: 18,
        fontSize: 36,
      }}
    >
      50% OFF
    </Text>
  ),
  description: (
    <View>
      <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 170, fontSize: 15 }}>
        All Salad and Pasta
      </Text>
    </View>
  ),
  titre: (
    <View
      style={{
        marginRight: 50,
        marginTop: 14,
        backgroundColor: 'white',
        width: 147,
        height: 36,
        marginLeft: 170,
        borderRadius: 6,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 13,
          color: '#FA5A00',
          marginTop: 8,
        }}
      >
        Use Code Attack50
      </Text>
    </View>
  ),

  image: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdjhuDv0WwyCuFTL3XOHgwRl2Fsz_jxEoX-hNWJQ6GS2a0dBafgI-vhszhJldVXj9CB0&usqp=CAU"
      style={{
        width: 116,
        height: 116,
        borderRadius: 50,
        marginLeft: 20,
        marginTop: -50,
      }}
    ></img>
  ),
  imageBackground: (
    <View style={{}}>
      <ImageBackground imageStyle={{ borderRadius: 25 }} source={{}}></ImageBackground>
    </View>
  ),
};

CardType3.args = {
  ...Basic.args,
  background: '#F2F3F2',

  borderRadius: 10,
  height: 115,
  width: 334,
  border: 3,

  title: <Text style={{ color: 'black' }}> test </Text>,
  // description: <Text style={{ color: 'black' }}> test </Text>,
  // background: 'white',
  imageBackground: (
    <View style={{}}>
      <ImageBackground imageStyle={{ borderRadius: 25 }} source={{}}></ImageBackground>
    </View>
  ),
};
