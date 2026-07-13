import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function CartScreen() {

  const navigation: any = useNavigation();
  const route: any = useRoute();

  const { restaurant , item } = route.params;

  const deliveryFee = 40;
  const taxes = 25;

  const total =
    item.price +
    deliveryFee +
    taxes;

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>
        🛒 Cart
      </Text>

      <View style={styles.card}>

        <Text style={styles.restaurant}>
          {restaurant.name}
        </Text>

        <View style={styles.itemRow}>

          <View>

            <Text style={styles.itemName}>
              {item.name}
            </Text>

            <Text style={styles.itemPrice}>
              ₹{item.price}
            </Text>

          </View>

          <View style={styles.quantity}>

            <Text style={styles.qtyButton}>-</Text>

            <Text style={styles.qty}>1</Text>

            <Text style={styles.qtyButton}>+</Text>

          </View>

        </View>

      </View>

      <View style={styles.summary}>

        <View style={styles.summaryRow}>
          <Text>Subtotal</Text>
          <Text>₹{item.price}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text>Delivery</Text>
          <Text>₹40</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text>Taxes</Text>
          <Text>₹25</Text>
        </View>

        <View
          style={styles.divider}
        />

        <View style={styles.summaryRow}>

          <Text style={styles.total}>
            Total
          </Text>

          <Text style={styles.total}>
            ₹{total}
          </Text>

        </View>

      </View>

      <View style={styles.address}>

        <Text style={styles.addressTitle}>
          Delivery Address
        </Text>

        <Text style={styles.addressText}>
          📍 Home{"\n"}
          221B Baker Street
        </Text>

      </View>

      <Pressable

        style={styles.button}

        onPress={() =>
          navigation.navigate("Order")
        }

      >

        <Text style={styles.buttonText}>
          Proceed to Checkout
        </Text>

      </Pressable>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    elevation: 3,
  },

  restaurant: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemName: {
    fontSize: 18,
    fontWeight: "600",
  },

  itemPrice: {
    marginTop: 6,
    color: "#FF6B35",
    fontWeight: "700",
  },

  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyButton: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 10,
  },

  qty: {
    fontSize: 18,
    marginHorizontal: 12,
  },

  summary: {
    marginTop: 24,
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    elevation: 3,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginBottom: 14,
  },

  total: {
    fontSize: 18,
    fontWeight: "700",
  },

  address: {
    marginTop: 24,
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    elevation: 3,
  },

  addressTitle: {
    fontWeight: "700",
    marginBottom: 8,
    fontSize: 17,
  },

  addressText: {
    color: "#666",
    lineHeight: 24,
  },

  button: {
    marginTop: "auto",
    backgroundColor: "#FF6B35",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 18,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
  },

});