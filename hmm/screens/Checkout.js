import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Checkout ({navigation}) {

    return (
       <View
          style={{
            backgroundColor: "white",
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>Thank you for purchasing</Text>
          <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>Please enter your information</Text>
       <View style={{marginTop: 10}}>
          <TextInput
             style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
                }}
             placeholder="Enter your Full name"
             />
       </View>
        <View style={{marginTop: 10}}>
            <TextInput
              style={{
                padding: 15,
                borderRadius: 10,
                borderWidth: 0.7,
                paddingHorizontal: 60,
              }}
              placeholder="Enter your Address"
            />
        </View>
        <View style={{marginTop: 10}}>
           <TextInput
              style={{
                 padding: 15,
                 borderRadius: 10,
                 borderWidth: 0.7,
                 paddingHorizontal: 60,
                 }}
              placeholder="Enter your Phone"
              />
        </View>
        <View style={{marginTop: 10}}>
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
        <TouchableOpacity
           onPress={() => {
             navigation.navigate("Confirmation");
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
           <Text style={{ paddingLeft: 10, color: "white" }}>CheckOut</Text>
        </TouchableOpacity>
       </View>
    );
}

