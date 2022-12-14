import { View, Image } from 'react-native';
import React from 'react';

type IITImageProps = {
  image: string;
};
export const CompImage: React.FC<IITImageProps> = (props) => {
  const { image } = props;

  return (
    <View>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          top: -180,
          marginLeft: 50,
        }}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default Image;
