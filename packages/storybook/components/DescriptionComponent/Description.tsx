import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

type descProps = {
  description: string;
};

export const DescComp: React.FC<descProps> = (props) => {
  const { description } = props;

  return (
    <View>
      <Text style={styles.description}>
        <strong>{description}</strong>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 32,
    marginLeft: 300,
  },
});
