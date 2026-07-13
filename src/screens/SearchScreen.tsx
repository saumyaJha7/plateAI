import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/Restaurants";

const POPULAR_SEARCHES = ["Pizza", "Burger", "Chinese", "Healthy", "Sushi"];

export default function SearchScreen() {
  const navigation: any = useNavigation();
  const [search, setSearch] = useState("");

  const filteredRestaurants = useMemo(() => {
    if (!search.trim()) return restaurants;
    return restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Search</Text>

      {/* Search input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#FF6B35" />
        <TextInput
          placeholder="Search restaurants or cuisine..."
          placeholderTextColor="#BCC0C8"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
        />
        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")} hitSlop={8}>
            <Ionicons name="close-circle" size={18} color="#CCC" />
          </Pressable>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Popular searches */}
        {search.length === 0 && (
          <>
            <Text style={styles.sectionTitle}>Popular Searches</Text>
            <View style={styles.chips}>
              {POPULAR_SEARCHES.map((item) => (
                <Pressable
                  key={item}
                  style={({ pressed }) => [
                    styles.chip,
                    pressed && styles.chipPressed,
                  ]}
                  onPress={() => setSearch(item)}
                  android_ripple={{ color: "#FF6B35" }}
                >
                  <Text style={styles.chipText}>{item}</Text>
                </Pressable>
              ))}
            </View>
          </>
        )}

        {/* Results */}
        <Text style={styles.sectionTitle}>
          {search.length > 0
            ? `${filteredRestaurants.length} Result${filteredRestaurants.length !== 1 ? "s" : ""}`
            : "All Restaurants"}
        </Text>

        {filteredRestaurants.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyTitle}>No results found</Text>
            <Text style={styles.emptySubtitle}>
              Try searching for a different cuisine or restaurant name.
            </Text>
          </View>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onPress={() => navigation.navigate("Details", { restaurant })}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 16,
    color: "#222",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 22,
    elevation: 2,
    borderWidth: 1.5,
    borderColor: "#F0F0F0",
  },

  input: {
    flex: 1,
    paddingVertical: 15,
    marginLeft: 10,
    marginRight: 6,
    fontSize: 15,
    color: "#222",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
    color: "#222",
  },

  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
    gap: 10,
  },

  chip: {
    backgroundColor: "#FFE8DF",
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    overflow: "hidden",
  },

  chipPressed: {
    backgroundColor: "#FFCBB8",
  },

  chipText: {
    color: "#FF6B35",
    fontWeight: "600",
    fontSize: 14,
  },

  emptyState: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 20,
  },

  emptyEmoji: {
    fontSize: 52,
    marginBottom: 16,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },

  emptySubtitle: {
    fontSize: 14,
    color: "#AAA",
    textAlign: "center",
    lineHeight: 22,
  },
});