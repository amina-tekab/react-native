import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { CardPromotion, CardNavigation, CardFood } from "@my-workspace/my-ui";
import { AntDesign, Octicons, Entypo, Ionicons } from "@expo/vector-icons";
const HomeFood = ({ navigation }) => {
  const [listFood] = useState([
    {
      source:
        "https://s3-alpha-sig.figma.com/img/ee21/1fb6/55f8b2c76b8c5e3e6aa1acf9826d0fb1?Expires=1674432000&Signature=Cpe~QkOh4WYfxw9XbuPcl4Ydhmhcmt4v6Rsl7PEMo83SpAViZNWvs70~2Zfc5BaQBcyrXqIdVUCfJ5nyufjKdn03es6Tw80oBhYVqkIHCP9ZfkJOe3msUzXPuYuGnC4IWGyP0mmTcsr1Rk~7~o2u4uFm7nMpb1UHi3OFluuak3zzg48FhVBo0Pq3jYofuewq5WVWQ69qKM5r-KsxG2u94Ej7VdFRXffgZ2gxyq5hPjtesEzZ7KhrdVFhbg4yT~v4pbzcJl2MqgYUWQy97liEAu3yJG7CiDtz~6GWW3zuEFEVXhV7-3lIEtIRru8EPb30sKy4d8PA8h5WP2r1SY6UbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Martabak Ujang",
      description: "Rp 890.000",
    },
    {
      source:
        "https://s3-alpha-sig.figma.com/img/ee21/1fb6/55f8b2c76b8c5e3e6aa1acf9826d0fb1?Expires=1674432000&Signature=Cpe~QkOh4WYfxw9XbuPcl4Ydhmhcmt4v6Rsl7PEMo83SpAViZNWvs70~2Zfc5BaQBcyrXqIdVUCfJ5nyufjKdn03es6Tw80oBhYVqkIHCP9ZfkJOe3msUzXPuYuGnC4IWGyP0mmTcsr1Rk~7~o2u4uFm7nMpb1UHi3OFluuak3zzg48FhVBo0Pq3jYofuewq5WVWQ69qKM5r-KsxG2u94Ej7VdFRXffgZ2gxyq5hPjtesEzZ7KhrdVFhbg4yT~v4pbzcJl2MqgYUWQy97liEAu3yJG7CiDtz~6GWW3zuEFEVXhV7-3lIEtIRru8EPb30sKy4d8PA8h5WP2r1SY6UbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Es Tongtong",
      description: "Rp 12.500.000",
    },
    {
      source:
        "https://s3-alpha-sig.figma.com/img/ee21/1fb6/55f8b2c76b8c5e3e6aa1acf9826d0fb1?Expires=1674432000&Signature=Cpe~QkOh4WYfxw9XbuPcl4Ydhmhcmt4v6Rsl7PEMo83SpAViZNWvs70~2Zfc5BaQBcyrXqIdVUCfJ5nyufjKdn03es6Tw80oBhYVqkIHCP9ZfkJOe3msUzXPuYuGnC4IWGyP0mmTcsr1Rk~7~o2u4uFm7nMpb1UHi3OFluuak3zzg48FhVBo0Pq3jYofuewq5WVWQ69qKM5r-KsxG2u94Ej7VdFRXffgZ2gxyq5hPjtesEzZ7KhrdVFhbg4yT~v4pbzcJl2MqgYUWQy97liEAu3yJG7CiDtz~6GWW3zuEFEVXhV7-3lIEtIRru8EPb30sKy4d8PA8h5WP2r1SY6UbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Donat CHerry",
      description: "Rp 590.000",
    },
    {
      source:
        "https://s3-alpha-sig.figma.com/img/ee21/1fb6/55f8b2c76b8c5e3e6aa1acf9826d0fb1?Expires=1674432000&Signature=Cpe~QkOh4WYfxw9XbuPcl4Ydhmhcmt4v6Rsl7PEMo83SpAViZNWvs70~2Zfc5BaQBcyrXqIdVUCfJ5nyufjKdn03es6Tw80oBhYVqkIHCP9ZfkJOe3msUzXPuYuGnC4IWGyP0mmTcsr1Rk~7~o2u4uFm7nMpb1UHi3OFluuak3zzg48FhVBo0Pq3jYofuewq5WVWQ69qKM5r-KsxG2u94Ej7VdFRXffgZ2gxyq5hPjtesEzZ7KhrdVFhbg4yT~v4pbzcJl2MqgYUWQy97liEAu3yJG7CiDtz~6GWW3zuEFEVXhV7-3lIEtIRru8EPb30sKy4d8PA8h5WP2r1SY6UbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Telur Jahe",
      description: "Rp 80.000.000",
    },
    {
      source:
        "https://s3-alpha-sig.figma.com/img/ee21/1fb6/55f8b2c76b8c5e3e6aa1acf9826d0fb1?Expires=1674432000&Signature=Cpe~QkOh4WYfxw9XbuPcl4Ydhmhcmt4v6Rsl7PEMo83SpAViZNWvs70~2Zfc5BaQBcyrXqIdVUCfJ5nyufjKdn03es6Tw80oBhYVqkIHCP9ZfkJOe3msUzXPuYuGnC4IWGyP0mmTcsr1Rk~7~o2u4uFm7nMpb1UHi3OFluuak3zzg48FhVBo0Pq3jYofuewq5WVWQ69qKM5r-KsxG2u94Ej7VdFRXffgZ2gxyq5hPjtesEzZ7KhrdVFhbg4yT~v4pbzcJl2MqgYUWQy97liEAu3yJG7CiDtz~6GWW3zuEFEVXhV7-3lIEtIRru8EPb30sKy4d8PA8h5WP2r1SY6UbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Silver Choco",
      description: "Rp 450.000",
    },
    {
      source:
        "https://s3-alpha-sig.figma.com/img/ee21/1fb6/55f8b2c76b8c5e3e6aa1acf9826d0fb1?Expires=1674432000&Signature=Cpe~QkOh4WYfxw9XbuPcl4Ydhmhcmt4v6Rsl7PEMo83SpAViZNWvs70~2Zfc5BaQBcyrXqIdVUCfJ5nyufjKdn03es6Tw80oBhYVqkIHCP9ZfkJOe3msUzXPuYuGnC4IWGyP0mmTcsr1Rk~7~o2u4uFm7nMpb1UHi3OFluuak3zzg48FhVBo0Pq3jYofuewq5WVWQ69qKM5r-KsxG2u94Ej7VdFRXffgZ2gxyq5hPjtesEzZ7KhrdVFhbg4yT~v4pbzcJl2MqgYUWQy97liEAu3yJG7CiDtz~6GWW3zuEFEVXhV7-3lIEtIRru8EPb30sKy4d8PA8h5WP2r1SY6UbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Candy Pizza",
      description: "Rp 900.000",
    },
  ]);
  return (
    <View>
      <View style={{ marginTop: 20, marginLeft: 250 }}>
        <CardNavigation
          description={
            <View style={{ flexWrap: "wrap", marginTop: 4 }}>
              <AntDesign name="enviromento" size={15} color="#035176" />
              <Text
                style={{
                  color: "#B3B3B3",
                  fontWeight: "500",
                  marginLeft: 30,
                  marginTop: -19,
                }}
              >
                Location, Main City-Napgur
              </Text>
            </View>
          }
          icon={
            <View style={{ marginLeft: 250, marginTop: -35 }}>
              <Octicons name="bell-fill" size={25} color="#035176" />
            </View>
          }
          title={
            <Text style={{ color: "#010E16", fontWeight: "700" }}>
              Hi Noha!
            </Text>
          }
        />
      </View>
      <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CardPromotion
          style={{ marginTop: 20 }}
          imageBackground={
            <ImageBackground
              imageStyle={{ borderRadius: 25 }}
              source={{
                uri:
                  "https://s3-alpha-sig.figma.com/img/5c95/0776/6af343a25942168f0e9448e7af55d7d7?Expires=1674432000&Signature=pv9Ym-gLf9nopc0SUM7c2qINktp7UPhpD3vMtOxhwUW0rev0YBiJNEWmngRbb1JqF5kQv0VvHR-USNn1JEzuKepNWxB47F9ILr41wavousDIQ-oBvZ1v7GYoKSRUx2IEMmeNy401aFpaeu4JfZwEO2dUc4TLWu-pOk6pdtZJ1OCnp5DPmh9qWc9mJRRk2hTIDOHSvz2Wd6KX~rcBAvhYRSPVq2iC21XYLKjLOuOKFi1EkFtadQlrjxcoeN32TGnLN4OmWzIgedoE6JRYvRTqXJxWBjSdFaMWa~unEGVsF3kgIW2r-10C96qHrH4MoMFqlcyB47XiLOR2Yrrow3-slg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
              }}
              style={{ minHeight: 200, width: 437 }}
            >
              <View>
                <Text
                  style={{
                    color: "#9B9B9B",
                    fontSize: 17,
                    fontWeight: "500",
                    marginLeft: 22,
                    marginTop: 20,
                  }}
                >
                  Get Special Discount
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Inria Serif",
                    fontSize: 35,
                    fontWeight: "700",
                    marginLeft: 22,
                    marginTop: 10,
                  }}
                >
                  up to 75%
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 6,
                  height: 24,
                  marginLeft: 22,
                  marginRight: 50,
                  marginTop: 31,
                  width: 101,
                }}
              >
                <Text
                  style={{
                    color: "#010E16",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginTop: 3,
                    textAlign: "center",
                  }}
                >
                  Claim Voucher
                </Text>
              </View>
            </ImageBackground>
          }
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 90,
            color: "#010E16",
            fontWeight: "700",
            marginLeft: 40,
          }}
        >
          Sweets Foods
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        {listFood.map((food, index) => {
          return index % 2 === 0 ? (
            <View style={{ flexDirection: "row" }}>
              <CardFood
                image={
                  <Image
                    source={{ uri: listFood[index].source }}
                    style={{
                      width: 178,
                      height: 116,
                      borderRadius: 10,
                      marginLeft: 30,
                      marginTop: 10,
                    }}
                  ></Image>
                }
                price={
                  <Text style={{ color: "gray", marginLeft: 30 }}>
                    {listFood[index].description}
                  </Text>
                }
                title={
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: 30,
                    }}
                  >
                    {listFood[index].title}
                  </Text>
                }
              />
              {listFood[index + 1] ? (
                <CardFood
                  image={
                    <Image
                      source={{ uri: listFood[index].source }}
                      style={{
                        width: 178,
                        height: 116,
                        borderRadius: 10,
                        marginLeft: 30,
                        marginTop: 10,
                      }}
                    ></Image>
                  }
                  price={
                    <Text style={{ color: "gray", marginLeft: 30 }}>
                      {listFood[index + 1]?.description}
                    </Text>
                  }
                  title={
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginLeft: 30,
                      }}
                    >
                      {listFood[index + 1]?.title}
                    </Text>
                  }
                />
              ) : null}
            </View>
          ) : null;
        })}
      </View>
    </View>
  );
};

export default HomeFood;

const styles = StyleSheet.create({});
