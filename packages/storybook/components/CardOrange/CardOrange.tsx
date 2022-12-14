import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyButton } from '../Button/Button';
import { IITTitle } from '../Title/Title';
import { DescComp } from '../DescriptionComponent/Description';
import { CompImage } from '../ImageComponent/Image';

type IITCardProps = {
  title: string;
  description: string;
  image: string;
  button: string;
};

export const IITCard: React.FC<IITCardProps> = (props) => {
  // const { image, text, description, title } = props;

  return (
    <View
      style={{
        borderWidth: 1,

        borderRadius: 30,
        borderColor: '#A13B28',
        backgroundColor: '#ff8008',
        width: 710,
        height: 300,
      }}
    >
      <IITTitle title={'50 % OFF'} />
      <DescComp description={'All Salad and pasta'} />
      <MyButton text={'50 % OFF'} />
      <CompImage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jPh408BqxSqQP3YrXDZKdFyJbrEvxlkeAQ&usqp=CAU" />
    </View>
  );
};

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 70,
//     color: 'white',
//     textAlign: 'center',
//     marginLeft: 300,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//     width: 100,
//     height: 500,
//     borderRadius: 100,
//     marginBottom: 50,
//   },
//   description: {
//     fontSize: 32,
//     marginLeft: 300,
//   },
//   button: {
//     fontSize: 32,
//     marginLeft: 300,
//     color: '#A13B28',
//     borderWidth: 1,

//     borderRadius: 10,
//     borderColor: '#A13B28',
//     backgroundColor: 'white',
//     width: 300,
//     height: 980,
//   },
//   sheet: {
//     height: 250,
//     width: 50,
//     border: 1,
//   },
// });
