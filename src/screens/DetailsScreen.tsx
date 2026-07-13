import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

type DetailsScreenProp = {
  setCartCount: (value: any) => void;
};

export default function DetailsScreen({ setCartCount }: DetailsScreenProp) {
  const navigation: any = useNavigation();
  const route: any = useRoute();

  const { restaurant } = route.params;

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero image with floating back button */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: restaurant.image }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Ionicons name="arrow-back" size={20} color="#222" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{restaurant.name}</Text>

          <Text style={styles.rating}>
            ⭐ {restaurant.rating} • {restaurant.deliveryTime} •{" "}
            {restaurant.priceForTwo}
          </Text>

          <View style={styles.cuisineChip}>
            <Text style={styles.cuisineText}>{restaurant.cuisine}</Text>
          </View>

          <Text style={styles.heading}>About</Text>
          <Text style={styles.description}>{restaurant.description}</Text>

          <Text style={styles.heading}>Popular Items</Text>

          {restaurant.menu.map((item: any) => (
            <View key={item.id} style={styles.menuItem}>
              <View style={styles.menuItemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>₹{item.price}</Text>
              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.addButton,
                  pressed && styles.addButtonPressed,
                ]}
                onPress={() => {
                  setCartCount((prev: number) => prev + 1);
                  navigation.navigate("Cart", { restaurant, item });
                }}
                android_ripple={{ color: "#fff2ee", borderless: false }}
              >
                <Text style={styles.addButtonText}>Add</Text>
              </Pressable>
            </View>
          ))}

          {/* Bottom padding */}
          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 280,
  },

  backBtn: {
    position: "absolute",
    top: 52,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.92)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
  },

  rating: {
    marginTop: 8,
    color: "#666",
    fontSize: 15,
  },

  cuisineChip: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: "#FFE8DF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  cuisineText: {
    color: "#FF6B35",
    fontWeight: "600",
    fontSize: 13,
  },

  heading: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  description: {
    color: "#666",
    lineHeight: 24,
    fontSize: 15,
  },

  menuItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  menuItemInfo: {
    flex: 1,
    marginRight: 12,
  },

  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  itemDescription: {
    fontSize: 13,
    color: "#888",
    marginTop: 3,
    lineHeight: 18,
  },

  itemPrice: {
    marginTop: 6,
    color: "#FF6B35",
    fontWeight: "700",
    fontSize: 15,
  },

  addButton: {
    backgroundColor: "#FF6B35",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60,
  },

  addButtonPressed: {
    backgroundColor: "#e05a28",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
