import { Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import React from 'react';
interface MyButtonProps {
  text?: string;
}

export const MyButton = ({ text }: MyButtonProps) => {
  const [simpltxt, setSimpltxt] = React.useState('');

  return (
    <>
      <Button status="danger" style={styles.button}>
        {''}
      </Button>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    fontSize: '32',
    marginLeft: 300,
    color: '#A13B28',
    borderWidth: 1,

    borderRadius: 10,
    borderColor: '#A13B28',
    backgroundColor: 'white',
    width: 300,
    height: 50,
  },
});
