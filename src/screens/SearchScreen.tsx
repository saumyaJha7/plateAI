import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/Restaurants";

export default function SearchScreen() {

  const navigation: any = useNavigation();

  const [search, setSearch] = useState("");

  const filteredRestaurants = useMemo(() => {

    return restaurants.filter((restaurant) =>

      restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      restaurant.cuisine
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  }, [search]);

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>
        Search
      </Text>

      <View style={styles.searchContainer}>

        <Ionicons
          name="search"
          size={22}
          color="#888"
        />

        <TextInput
          placeholder="Search restaurants..."
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.sectionTitle}>
          Popular Searches
        </Text>

        <View style={styles.chips}>

          {[
            "Pizza",
            "Burger",
            "Chinese",
            "Healthy",
          ].map((item) => (

            <Text
              key={item}
              style={styles.chip}
            >
              {item}
            </Text>

          ))}

        </View>

        <Text style={styles.sectionTitle}>
          Results
        </Text>

        {

          filteredRestaurants.map((restaurant) => (

            <RestaurantCard

              key={restaurant.id}

              restaurant={restaurant}

              onPress={() =>

                navigation.navigate("Details", {
                  restaurant,
                })

              }

            />

          ))

        }

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
    marginBottom: 20,
    color: "#222",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
    elevation: 2,
  },

  input: {
    flex: 1,
    paddingVertical: 16,
    marginLeft: 10,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#222",
  },

  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },

  chip: {
    backgroundColor: "#FFE8DF",
    color: "#FF6B35",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    marginBottom: 12,
    fontWeight: "600",
  },

});