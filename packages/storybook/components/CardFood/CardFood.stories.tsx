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
      <Image
        source={{ uri: 'https://images.heb.com/is/image/HEBGrocery/000377497' }}
        style={{
          width: 116,
          height: 116,

          marginLeft: 30,
          marginTop: 10,
        }}
      ></Image>
    ),

    title: (
      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 40, marginLeft: 10 }}>
        Organic Bananas
      </Text>
    ),

    description: (
      <Text style={{ color: 'gray', marginTop: 10, marginLeft: 10 }}> 7pcs, priceg </Text>
    ),

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
        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}> $4.99 </Text>
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
    <Image
      source={{
        uri: 'https://s3-alpha-sig.figma.com/img/a051/cfd4/4303056c4648d6b659fa409c1090701a?Expires=1674432000&Signature=It~fwq32Ck8XbTtwN9H7xGeLTvYDn~CV6XzYZPVaIz5LlIU7zojR2sETtVUKVoFjhpw11KhzUaow1y53PgiOu6Z6dYK2-tMgwJW2dMMYk7V5ZbFddGbV62rhsgNtJE-owkwZFZZWeoIocaXjqoK2t-gbO519XwZL1vV37hgQYEPSvq9V35F5OuJ26B3TMBWcAg~Cldh~QsxD0JJJ4H15sPodJ8fOnFdrch5WDioO6oWnyyqkSjqk5~0v~uXX4HTcXSGxxJ69Yvqlf1dwOFnPJn8k4jh4CZQ01SnpfkgKMugcvl-mIViJsc7z3Peusch0XLFXPtBsKKwmc06CyskYng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      }}
      style={{
        width: 116,
        height: 116,
        borderRadius: 50,
        marginLeft: 20,
        marginTop: 20,
      }}
    ></Image>
  ),
  description: <Text> </Text>,
};

CardType3.args = {
  ...Basic.args,
  borderColor: 'white',
  height: 100,
  width: 200,

  shadowOpacity: 0,
  shadowRadius: 0,

  elevation: 3,

  image: (
    <Image
      source={{
        uri: 'https://s3-alpha-sig.figma.com/img/ee21/1fb6/55f8b2c76b8c5e3e6aa1acf9826d0fb1?Expires=1674432000&Signature=Cpe~QkOh4WYfxw9XbuPcl4Ydhmhcmt4v6Rsl7PEMo83SpAViZNWvs70~2Zfc5BaQBcyrXqIdVUCfJ5nyufjKdn03es6Tw80oBhYVqkIHCP9ZfkJOe3msUzXPuYuGnC4IWGyP0mmTcsr1Rk~7~o2u4uFm7nMpb1UHi3OFluuak3zzg48FhVBo0Pq3jYofuewq5WVWQ69qKM5r-KsxG2u94Ej7VdFRXffgZ2gxyq5hPjtesEzZ7KhrdVFhbg4yT~v4pbzcJl2MqgYUWQy97liEAu3yJG7CiDtz~6GWW3zuEFEVXhV7-3lIEtIRru8EPb30sKy4d8PA8h5WP2r1SY6UbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      }}
      style={{
        width: 178,
        height: 116,
        borderRadius: 10,

        marginTop: 10,
      }}
    ></Image>
  ),
  title: <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Mortabak Ujang</Text>,
  description: <Text style={{ color: 'gray', marginTop: 10 }}> Rp 860.00 </Text>,

  price: <View></View>,
};
