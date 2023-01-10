import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

type CardFoodProps = {
  title: React.ReactNode;
  price?: React.ReactNode;
  description?: React.ReactNode;
  background?: string;
  borderRadius?: number;
  imag?: string;
  image?: React.ReactNode;
  width: number;
  height: number;
  border: number;
  BorderShadow: string;
  flex: number;
  borderWidth?: number;
  borderColor?: string;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  source: string;
};

const CardFood: React.FC<CardFoodProps> = (props) => {
  const {
    title,
    price,
    borderColor,
    borderWidth,
    description,
    background,
    borderRadius,
    width,
    height,
    image,
    source,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    elevation,
  } = props;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: background,
        height: height,
        width: width,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderColor: borderColor,
        shadowColor: shadowColor,
        shadowOpacity: shadowOpacity,
        shadowRadius: shadowRadius,
        elevation: elevation,
      }}
    >
      <View>{image}</View>
      <View>
        {title}
        {description}
        {price}
      </View>
    </View>
  );
};

export default CardFood;
