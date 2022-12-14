import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { IITCard } from './CardOrange';

const IITCardMeta: ComponentMeta<typeof IITCard> = {
  title: 'Card Orange',
  component: IITCard,
  argTypes: {
    // onButtonPress: { action: "pressed the button" },
    // colorButton: { control: { type: "color" } },
  },
  args: {
    title: 'Code',
    button: 'Use Code attack50',
    description: ' All salad and pasta',
  },
};

export default IITCardMeta;

type IITCardStory = ComponentStory<typeof IITCard>;

export const Basic: IITCardStory = (args) => <IITCard {...args} />;

export const CustomColorButton: IITCardStory = (args) => <IITCard {...args} />;
CustomColorButton.args = {
  ...Basic.args,
  // colorButton: "red",
};
