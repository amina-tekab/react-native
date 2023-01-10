import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import CardNavigation from './CardNavigation';
import { AntDesign, Octicons, Entypo, Ionicons } from '@expo/vector-icons';
import { Button, Text, View, Image } from 'react-native';
const CardNavigationMeta: ComponentMeta<typeof CardNavigation> = {
  title: 'CardNavigation ',
  component: CardNavigation,
  argTypes: {},
  args: {
    title: <Text style={{ color: '#010E16', fontWeight: '700' }}> Hi Noha! </Text>,
    // icon: <AntDesign name="enviromento" size={24} color="#035176" />,
    description: (
      <View
        style={{
          flexWrap: 'wrap',
          marginTop: 4,
        }}
      >
        <AntDesign name="enviromento" size={15} color="#035176" />
        <Text style={{ color: '#B3B3B3', fontWeight: '500', marginLeft: 20, marginTop: -19 }}>
          Location, Main City-Napgur
        </Text>
      </View>
    ),
    icon: (
      <View style={{ marginLeft: 250, marginTop: -35 }}>
        <Octicons name="bell-fill" size={25} color="#035176" />
      </View>
    ),
  },
};
export default CardNavigationMeta;

type CardNavigationStory = ComponentStory<typeof CardNavigation>;
export const Basic: CardNavigationStory = (args) => <CardNavigation {...args} />;
export const CardType2: CardNavigationStory = (args) => <CardNavigation {...args} />;
export const CardType3: CardNavigationStory = (args) => <CardNavigation {...args} />;
CardType2.args = {
  ...Basic.args,
  // <View elevation={5}>
  // </View>
  title: <Text> </Text>,
  icon: (
    <View style={{ marginTop: -19 }}>
      <Entypo name="menu" size={30} color="#4A4A6A" />
    </View>
  ),
  description: (
    <Text style={{ color: '#B3B3B3', fontWeight: '500', marginLeft: 200, marginTop: -16 }}>
      Café Jack
    </Text>
  ),
};

CardType3.args = {
  ...Basic.args,
  title: <Text> </Text>,

  icon: (
    <View style={{ marginTop: -25, marginLeft: 5 }}>
      <Entypo name="menu" size={30} color="#4C4F4D" />
    </View>
  ),
  description: (
    <View
      style={{
        flexWrap: 'wrap',
      }}
    >
      <Text
        style={{
          flexWrap: 'wrap',
          color: '#4C4F4D',
          marginLeft: 130,
          marginTop: -15,

          fontWeight: '600',
          fontSize: 18,
        }}
      >
        Dhaka, Banassre
      </Text>
      <View style={{ marginTop: -24, marginLeft: 100 }}>
        <Ionicons name="location-sharp" size={25} color="#4C4F4D" />
      </View>
    </View>
  ),
};
