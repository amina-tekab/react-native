import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
type CardNavigationProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  marginLeft: number;
};

const CardNavigation: React.FC<CardNavigationProps> = (props) => {
  const { icon, title, description } = props;
  return (
    <View>
      {title}
      {description}

      {icon}
    </View>
  );
};

export default CardNavigation;

const styles = StyleSheet.create({});
