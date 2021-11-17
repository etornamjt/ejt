import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function LoginPage ({navigation}) {

  return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>LOGIN</Text>
        <Text style={{ fontSize: 20, color: "grey" }}>Please enter your Email and Password</Text>
        <View style={{marginTop: 30}}>
            <TextInput
              style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
              }}
              placeholder="Enter your Email"
            />
        </View>
        <View style={{ marginTop: 10,}}>
           <TextInput
              secureTextEntry={true}
              onChangeText={(
                e
              )=> {
                console.log(e)
              }}
              style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
              }}
              placeholder="Enter your password"
           />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Products");
          }}
          style={{
            padding: 15,
            paddingHorizontal: 80,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "black",
          }}>
          <AntDesign/>
          <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
  );
}