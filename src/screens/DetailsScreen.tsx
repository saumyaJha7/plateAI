import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

type DetailsScreenProp = {
  setCartCount : (value : any) => void;
}

export default function DetailsScreen({setCartCount} : DetailsScreenProp) {
  const navigation: any = useNavigation();
  const route: any = useRoute();

  const { restaurant } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: restaurant.image,
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{restaurant.name}</Text>

          <Text style={styles.rating}>
            ⭐ {restaurant.rating} • {restaurant.deliveryTime} •{" "}
            {restaurant.priceForTwo}
          </Text>

          <Text style={styles.category}>{restaurant.cuisine}</Text>

          <Text style={styles.heading}>About</Text>

          <Text style={styles.description}>{restaurant.description}</Text>

          <Text style={styles.heading}>Popular Items</Text>

          {restaurant.menu.map((item: any) => (
            <View key={item.id} style={styles.menuItem}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>

                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>

              <Text style={styles.itemPrice}>₹{item.price}</Text>

              <Pressable
                style={styles.button}
                onPress={() => {
                  setCartCount((prev : number) => prev + 1);

                  navigation.navigate("Cart", {
                    restaurant,
                    item
                  })
                }
                }
              >
                <Text style={styles.buttonText}>Add</Text>
              </Pressable>
            </View>
          ))}
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

  image: {
    width: "100%",
    height: 260,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
  },

  rating: {
    marginTop: 8,
    color: "#666",
    fontSize: 16,
  },

  category: {
    marginTop: 6,
    color: "#FF6B35",
    fontWeight: "600",
  },

  heading: {
    marginTop: 30,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  description: {
    color: "#666",
    lineHeight: 24,
    fontSize: 16,
  },

  menuItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  itemName: {
    fontSize: 17,
    fontWeight: "600",
  },

  itemPrice: {
    color: "#FF6B35",
    fontWeight: "700",
  },

  itemDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  button: {
    backgroundColor: "#FF6B35",
    margin: 20,
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 18,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
