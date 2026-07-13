import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  restaurant: Restaurant;
  onPress: () => void;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
  cuisine: string;
  distance: string;
  description: string;
  menu: MenuItem[];
};

export default function RestaurantCard({ restaurant, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.93 }]}
      onPress={onPress}
      android_ripple={{ color: "#FFE8DF" }}
    >
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
      />

      {/* Delivery time chip overlaid on image */}
      <View style={styles.deliveryChip}>
        <Ionicons name="time-outline" size={12} color="#FFF" />
        <Text style={styles.deliveryChipText}> {restaurant.deliveryTime}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>{restaurant.name}</Text>
          <View style={styles.ratingPill}>
            <Text style={styles.ratingText}>⭐ {restaurant.rating}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.price}>{restaurant.priceForTwo}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 185,
  },

  deliveryChip: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.55)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  deliveryChipText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },

  body: {
    padding: 14,
  },

  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    flex: 1,
    marginRight: 8,
  },

  ratingPill: {
    backgroundColor: "#FFF8F0",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFD9B0",
  },

  ratingText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#CC6600",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  cuisine: {
    fontSize: 13,
    color: "#888",
  },

  dot: {
    marginHorizontal: 6,
    color: "#CCC",
  },

  price: {
    fontSize: 13,
    color: "#FF6B35",
    fontWeight: "600",
  },
});