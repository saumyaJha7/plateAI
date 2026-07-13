import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { orders } from "../data/Orders";
import OrderCard from "../components/OrderCard";

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>

      {orders.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>📦</Text>
          <Text style={styles.emptyTitle}>No orders yet</Text>
          <Text style={styles.emptySubtitle}>
            Your order history will appear here once you place an order.
          </Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </ScrollView>
      )}
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
    marginBottom: 22,
    color: "#222",
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    marginBottom: 80,
  },

  emptyEmoji: {
    fontSize: 56,
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