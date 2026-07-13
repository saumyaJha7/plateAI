import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function CartScreen() {
  const navigation: any = useNavigation();
  const route: any = useRoute();

  const { restaurant, item } = route.params;

  const [qty, setQty] = useState(1);

  const deliveryFee = 40;
  const taxes = 25;
  const total = item.price * qty + deliveryFee + taxes;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [styles.backBtn, pressed && { opacity: 0.6 }]}
        >
          <Ionicons name="arrow-back" size={20} color="#333" />
        </Pressable>
        <Text style={styles.heading}>Your Cart</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Cart item card */}
      <View style={styles.card}>
        <Text style={styles.restaurant}>{restaurant.name}</Text>

        <View style={styles.itemRow}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price} each</Text>
          </View>

          {/* Quantity stepper */}
          <View style={styles.stepper}>
            <Pressable
              style={({ pressed }) => [
                styles.stepperBtn,
                pressed && styles.stepperBtnPressed,
              ]}
              onPress={() => setQty((q) => Math.max(1, q - 1))}
              android_ripple={{ color: "#FFE8DF", borderless: true }}
            >
              <Text style={styles.stepperIcon}>−</Text>
            </Pressable>

            <Text style={styles.stepperQty}>{qty}</Text>

            <Pressable
              style={({ pressed }) => [
                styles.stepperBtn,
                pressed && styles.stepperBtnPressed,
              ]}
              onPress={() => setQty((q) => q + 1)}
              android_ripple={{ color: "#FFE8DF", borderless: true }}
            >
              <Text style={styles.stepperIcon}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Price summary */}
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>₹{item.price * qty}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery</Text>
          <Text style={styles.summaryValue}>₹{deliveryFee}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Taxes & Fees</Text>
          <Text style={styles.summaryValue}>₹{taxes}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹{total}</Text>
        </View>
      </View>

      {/* Delivery address */}
      <View style={styles.address}>
        <View style={styles.addressHeader}>
          <Ionicons name="location" size={18} color="#FF6B35" />
          <Text style={styles.addressTitle}> Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>Home — 221B Baker Street</Text>
      </View>

      {/* CTA */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("Order")}
        android_ripple={{ color: "#e05a28" }}
      >
        <Text style={styles.buttonText}>Proceed to Checkout</Text>
        <Text style={styles.buttonSub}>₹{total}</Text>
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    elevation: 3,
  },

  restaurant: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
  },

  itemPrice: {
    marginTop: 4,
    color: "#FF6B35",
    fontWeight: "600",
    fontSize: 14,
  },

  stepper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8F5",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    overflow: "hidden",
  },

  stepperBtn: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },

  stepperBtnPressed: {
    backgroundColor: "#FFE8DF",
  },

  stepperIcon: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FF6B35",
    lineHeight: 24,
  },

  stepperQty: {
    minWidth: 28,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  summary: {
    marginTop: 16,
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    elevation: 3,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  summaryLabel: {
    fontSize: 15,
    color: "#666",
  },

  summaryValue: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginBottom: 12,
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
  },

  totalValue: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FF6B35",
  },

  address: {
    marginTop: 16,
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 16,
    elevation: 3,
  },

  addressHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  addressTitle: {
    fontWeight: "700",
    fontSize: 15,
    color: "#222",
  },

  addressText: {
    color: "#666",
    fontSize: 14,
    marginLeft: 22,
  },

  button: {
    marginTop: "auto",
    backgroundColor: "#FF6B35",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
  },

  buttonPressed: {
    backgroundColor: "#e05a28",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },

  buttonSub: {
    color: "#FFD4C2",
    fontWeight: "600",
    fontSize: 15,
  },
});