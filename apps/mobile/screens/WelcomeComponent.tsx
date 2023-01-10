import React, { useRef, useEffect } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

const WelcomeComponent = ({ navigation }) => {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <View style={styles.buttonContainer}>
        <Button
          title="NEXT"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />

        <Button
          title="NEXT Food"
          onPress={() => {
            navigation.navigate("HomeFood");
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeComponent;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
