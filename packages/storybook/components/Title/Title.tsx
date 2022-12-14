import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type IITTITLEProps = {
  title: string;
};

export const IITTitle: React.FC<IITTITLEProps> = (props) => {
  const { title } = props;

  return (
    <View>
      <Text style={styles.title}>
        <strong>{title}</strong>
      </Text>
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
});
