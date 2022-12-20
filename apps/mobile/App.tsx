import { Button, StyleSheet, View, Text } from "react-native";
import React from "react";
import { MyButton, UpNextButton, CardFood } from "@my-workspace/my-ui";

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import WelcomeComponent from "./screens/WelcomeComponent";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <WelcomeComponent></WelcomeComponent>
      <CardFood
        background="white"
        borderColor="#EBECF0"
        borderRadius={16}
        borderWidth={1}
        description={<Text style={{ color: "black", marginTop: 10 }}> </Text>}
        elevation={3}
        height={190}
        image={
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaooMD2BDH-ufGxR-DL2mZl_MCR1hRKg4yg&usqp=CAU"
            style={{
              borderRadius: 50,
              flex: 2,
              height: 100,
              marginLeft: 20,
              marginTop: 20,
              width: 100,
            }}
          />
        }
        price={
          <View>
            <Text
              style={{
                color: "#FF7B2C",
                fontWeight: "bold",
                marginLeft: 40,
                marginTop: -20,
              }}
            >
              $ 10.40
            </Text>
          </View>
        }
        shadowColor="#000"
        shadowOpacity={0.22}
        shadowRadius={2.22}
        title={
          <Text
            style={{
              color: "#32324D",
              fontWeight: "bold",
              marginLeft: 35,
              marginTop: 25,
            }}
          >
            Egg Toast
          </Text>
        }
        width={150}
      />
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
