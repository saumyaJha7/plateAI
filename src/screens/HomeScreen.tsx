import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";


import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import SearchBar from "../components/SearchBar";
import CategoryChip from "../components/CategoryChip";
import RestaurantCard from "../components/RestaurantCard";

import { restaurants } from "../data/Restaurants";
import { categories } from '../data/Categories'

export default function HomeScreen() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Good Morning 👋
            </Text>
            <Text style={styles.location}>
              Deliver to Home
            </Text>
          </View>

          <Ionicons
            name="notifications-outline"
            size={28}
            color="#333"
          />

        </View>

        <SearchBar />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map((item) => (
            <CategoryChip
              key={item}
              emoji={item}
            />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>
          Popular Restaurants
        </Text>

        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onPress={() =>
              navigation.navigate("Details", {
                restaurant 
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

  location: {
    marginTop: 4,
    color: "#666",
    fontSize: 15,
  },

  categories: {
    marginTop: 24,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 20,
  },

});