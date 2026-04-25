import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({
  title,
  type,
  onPress
}: {
  title: string;
  type: "top" | "right" | "number";
  onPress:Function
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            type == "top" ? "black" : type == "right" ? "#8e11a7" : "gray",
        },
      ]}
      onPress={()=>{}}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 18,
    padding: 4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
