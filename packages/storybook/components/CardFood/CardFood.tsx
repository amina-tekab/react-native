import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

type CardFoodProps = {
  title: React.ReactNode;
  price?: React.ReactNode;
  description?: React.ReactNode;
  background?: string;
  borderRadius?: number;
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
      {image}
      {title}
      {description}
      {price}
    </View>
  );
};

export default CardFood;

const styles = StyleSheet.create({});
