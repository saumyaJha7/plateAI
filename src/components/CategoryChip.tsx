import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  emoji: string;
};

export default function CategoryChip({ emoji }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{emoji}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    elevation: 3,
  },

  text: {
    fontSize: 28,
  },
});