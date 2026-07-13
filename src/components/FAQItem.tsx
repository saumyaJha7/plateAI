import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

// Enable LayoutAnimation on Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.9 },
      ]}
      onPress={toggle}
      android_ripple={{ color: "#FFE8DF" }}
    >
      <View style={styles.header}>
        <Text style={styles.question}>{question}</Text>

        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={expanded ? "#FF6B35" : "#AAA"}
        />
      </View>

      {expanded && (
        <Text style={styles.answer}>{answer}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 12,
    elevation: 2,
    overflow: "hidden",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  question: {
    fontSize: 15,
    color: "#222",
    flex: 1,
    marginRight: 12,
    fontWeight: "500",
  },

  answer: {
    marginTop: 12,
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
    paddingTop: 12,
  },
});