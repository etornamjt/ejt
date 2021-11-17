import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Login ({navigation}) {

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Weaponry</Text>
      <Text style={{ fontSize: 10, fontWeight: "italic" }}>Proudly sponsored by Etornam</Text>
      <Text style={{ fontSize: 20, color: "grey" }}>We sell all types of weapons</Text>
      <Image
         style={{
           borderRadius: 20,
           marginBottom: 10,
           width: 220,
           height: 220,
         }}
         source={{
           uri: "https://images.unsplash.com/photo-1585589197566-b482772f8831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
         }}
      />
      <Text style={{ paddingLeft: 10, color: "orange" }}>Login Now!!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <Text> </Text>
      <Text style={{ paddingLeft: 10, color: "orange" }}>Not yet a Member?</Text>
      <Text style={{ paddingLeft: 10, color: "orange" }}>What are you waiting for?</Text>
      <Text style={{ paddingLeft: 10, color: "orange" }}>SignUp Now!!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
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
        <Text style={{ paddingLeft: 10, color: "white" }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}