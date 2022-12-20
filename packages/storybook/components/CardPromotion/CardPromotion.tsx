import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from 'react';

type CardFoodProps = {
  title: React.ReactNode;
  titre?: React.ReactNode;
  description?: React.ReactNode;
  background?: string;
  borderRadius: number;
  image?: React.ReactNode;
  width: number;
  height: number;
  marginTop: number;
  imageBackground?: React.ReactNode;
  border: number;
  borderColor: string;
};

const CardFood: React.FC<CardFoodProps> = (props) => {
  const {
    title,
    border,
    description,
    titre,
    marginTop,
    background,
    borderRadius,
    width,
    height,
    image,
    imageBackground,
    borderColor,
  } = props;
  return (
    <View
      style={{
        backgroundColor: background,
        height: height,
        width: width,
        borderRadius: borderRadius,
        marginTop: marginTop,
        borderColor: borderColor,
      }}
    >
      <View style={{ borderRadius: 20 }}>{imageBackground}</View>
      {title} {image}
      <View style={{ marginTop: -60 }}>{description}</View>
      {titre}
    </View>
  );
};

export default CardFood;

const styles = StyleSheet.create({});
