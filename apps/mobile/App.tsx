import { StyleSheet } from "react-native";
import React from "react";
import { MyButton } from "@my-workspace/my-ui";
import { IITTitle } from "../../packages/storybook/components/Title/Title";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import LottieViewComponent from "./screens/LottieViewComponent.native";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <MyButton
        bgColor="black"
        isDisabled
        onPress={() => {}}
        text="Hello Test"
        textColor="white"
      />
      <IITTitle Title={"50 % OFF"} />
      <LottieViewComponent></LottieViewComponent>
      <Text>hello</Text>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
