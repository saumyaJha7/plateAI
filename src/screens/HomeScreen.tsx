import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import SearchBar from "../components/SearchBar";
import CategoryChip from "../components/CategoryChip";
import RestaurantCard from "../components/RestaurantCard";

import { restaurants } from "../data/Restaurants";
import { categories } from "../data/Categories";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning 👋";
  if (hour < 17) return "Good Afternoon 👋";
  return "Good Evening 👋";
}

export default function HomeScreen() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{getGreeting()}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={14} color="#FF6B35" />
              <Text style={styles.location}> Deliver to Home</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.notifBtn} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={22} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Tappable search bar navigates to Search tab */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Search")}
        >
          <View pointerEvents="none">
            <SearchBar />
          </View>
        </TouchableOpacity>

        {/* Category chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map((item) => (
            <CategoryChip key={item} emoji={item} />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Popular Restaurants</Text>

        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onPress={() =>
              navigation.navigate("Details", {
                restaurant,
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  location: {
    color: "#666",
    fontSize: 14,
  },

  notifBtn: {
    width: 42,
    height: 42,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  categories: {
    marginTop: 24,
    marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 16,
  },
});