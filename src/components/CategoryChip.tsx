import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const EMOJI_LABELS: Record<string, string> = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍜": "Noodles",
  "🍣": "Sushi",
  "🥗": "Salad",
  "🍛": "Curry",
  "🍰": "Dessert",
  "☕": "Coffee",
  "🌮": "Mexican",
  "🥪": "Sandwich",
};

type Props = {
  emoji: string;
};

export default function CategoryChip({ emoji }: Props) {
  const label = EMOJI_LABELS[emoji] ?? emoji;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
      android_ripple={{ color: "#FFE8DF", borderless: true }}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginRight: 12,
    elevation: 3,
  },

  pressed: {
    backgroundColor: "#FFF1EB",
  },

  emoji: {
    fontSize: 26,
  },

  label: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: "600",
    color: "#555",
  },
});