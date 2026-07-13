import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  question: string;
};

export default function FAQItem({
  question,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {question}
      </Text>

      <Ionicons
        name="chevron-down"
        size={20}
        color="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  question: {
    fontSize: 16,
    color: "#222",
    flex: 1,
    marginRight: 10,
  },

});