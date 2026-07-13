import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  restaurant : Restaurant

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

export default function RestaurantCard({
  restaurant,
  onPress,
}: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />

      <View style={styles.body}>

        <Text style={styles.name}>
          {restaurant.name}
        </Text>

        <Text style={styles.info}>
          ⭐ {restaurant.rating} • {restaurant.deliveryTime}
        </Text>

        <Text style={styles.price}>
          {restaurant.priceForTwo}
        </Text>

      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 22,
    overflow: "hidden",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 180,
  },

  body: {
    padding: 16,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  info: {
    marginTop: 6,
    color: "#666",
    fontSize: 15,
  },

  price: {
    marginTop: 6,
    color: "#FF6B35",
    fontWeight: "700",
  },

});