import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type IITTITLEProps = {
  Title: string;
};

export const IITTitle: React.FC<IITTITLEProps> = (props) => {
  const { Title } = props;

  return (
    <View>
      <Text style={styles.title}>
        {' '}
        <strong>{Title}</strong>
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
