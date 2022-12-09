import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type IITCardProps = {
  title: React.ReactNode;
  description: string;
  image: string;
  button: string;
};

export const IITCard: React.FC<IITCardProps> = (props) => {
  const { description, image, button } = props;

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
      <title></title>
      {/* <Button title={buttonText} onPress={onButtonPress} color={colorButton}></Button> */}
      <Text style={styles.description}>
        {' '}
        <strong>{description}</strong>
      </Text>

      {/* <Text style={styles.button}>{button}</Text> */}
      <button
        style={{
          fontSize: 32,
          marginLeft: 300,
          color: '#A13B28',
          borderWidth: 1,

          borderRadius: 10,
          borderColor: '#A13B28',
          backgroundColor: 'white',
          width: 300,
          height: 10000,
        }}
      ></button>

      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          top: -180,
          marginLeft: 50,
        }}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jPh408BqxSqQP3YrXDZKdFyJbrEvxlkeAQ&usqp=CAU',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 70,
    color: 'white',
    textAlign: 'center',
    marginLeft: 300,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 100,
    height: 500,
    borderRadius: 100,
    marginBottom: 50,
  },
  description: {
    fontSize: 32,
    marginLeft: 300,
  },
  button: {
    fontSize: 32,
    marginLeft: 300,
    color: '#A13B28',
    borderWidth: 1,

    borderRadius: 10,
    borderColor: '#A13B28',
    backgroundColor: 'white',
    width: 300,
    height: 980,
  },
  sheet: {
    height: 250,
    width: 50,
    border: 1,
  },
});
