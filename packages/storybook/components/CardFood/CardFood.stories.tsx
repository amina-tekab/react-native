import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardFood from './CardFood';
import { Button, Text, View, Image } from 'react-native';
const CardFoodMeta: ComponentMeta<typeof CardFood> = {
  title: 'CardFood ',
  component: CardFood,
  argTypes: {},
  args: {
    background: 'white',
    borderRadius: 20,
    width: 180,
    height: 170,
    borderWidth: 1,
    borderColor: '#EBECF0',
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    image: (
      <img
        src="https://images.heb.com/is/image/HEBGrocery/000377497"
        style={{ width: 160, marginLeft: 10, height: 100, borderRadius: 20, marginTop: 10 }}
      ></img>
    ),

    title: (
      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 40 }}> Organic Bananas </Text>
    ),

    description: <Text style={{ color: 'gray', marginTop: 10 }}> 7pcs, priceg </Text>,

    price: (
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
          marginTop: 40,
          flexWrap: 'wrap',
        }}
      >
        <Text style={{ color: 'black', fontWeight: 'bold' }}> $4.99 </Text>
        <View style={{ marginLeft: 50, width: 50, height: 50, borderRadius: 50 }}>
          <Button title="+" color="green" />
        </View>
      </View>
    ),
  },
};
export default CardFoodMeta;

type CardFoodStory = ComponentStory<typeof CardFood>;
export const Basic: CardFoodStory = (args) => <CardFood {...args} />;
export const CardType2: CardFoodStory = (args) => <CardFood {...args} />;
export const CardType3: CardFoodStory = (args) => <CardFood {...args} />;
CardType2.args = {
  background: 'white',
  borderRadius: 16,
  height: 190,
  width: 150,
  borderWidth: 1,
  borderColor: '#EBECF0',
  shadowColor: '#000',

  ...Basic.args,
  // <View elevation={5}>
  // </View>

  title: (
    <Text style={{ color: '#32324D', fontWeight: 'bold', marginLeft: 35, marginTop: 25 }}>
      Egg Toast
    </Text>
  ),

  price: (
    <View>
      <Text style={{ color: '#FF7B2C', fontWeight: 'bold', marginLeft: 40, marginTop: -20 }}>
        $ 10.40
      </Text>
    </View>
  ),

  image: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaooMD2BDH-ufGxR-DL2mZl_MCR1hRKg4yg&usqp=CAU"
      style={{ width: 100, height: 100, borderRadius: 50, flex: 2, marginTop: 20, marginLeft: 20 }}
    ></img>
  ),
  description: <Text style={{ color: 'black', marginTop: 10 }}> </Text>,
};

CardType3.args = {
  ...Basic.args,
  borderColor: 'white',
  height: 100,
  width: 200,
  shadowColor: '',
  shadowOpacity: 0,
  shadowRadius: 0,

  elevation: 3,

  image: (
    <img
      src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
      style={{ width: 190, height: 100, borderRadius: 10, flex: 1 }}
    ></img>
  ),

  title: (
    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20, flex: 1 }}>
      Mortabak Ujang
    </Text>
  ),
  description: <Text style={{ color: 'black', flex: 1, marginTop: 10 }}> Rp 860.00 </Text>,

  price: (
    <View>
      <Text style={{ color: 'red', fontWeight: 'bold', marginLeft: 30 }}> </Text>
    </View>
  ),
};
