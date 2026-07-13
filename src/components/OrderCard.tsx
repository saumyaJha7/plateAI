import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  order: {
    restaurant: string;
    item: string;
    amount: string;
    status: string;
    date: string;
  };
};

export default function OrderCard({ order }: Props) {

  const getStatusColor = () => {
    switch (order.status) {
      case "Delivered":
        return "#4CAF50";
      case "On The Way":
        return "#FF9800";
      case "Cancelled":
        return "#F44336";
      default:
        return "#999";
    }
  };

  const getStatusIcon = (): keyof typeof Ionicons.glyphMap => {
    switch (order.status) {
      case "Delivered":
        return "checkmark-circle";
      case "On The Way":
        return "bicycle";
      case "Cancelled":
        return "close-circle";
      default:
        return "time";
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={[styles.badge, { backgroundColor: getStatusColor() + "22" }]}>
          <Ionicons
            name={getStatusIcon()}
            size={13}
            color={getStatusColor()}
            style={{ marginRight: 4 }}
          />
          <Text style={[styles.badgeText, { color: getStatusColor() }]}>
            {order.status}
          </Text>
        </View>
        <Text style={styles.date}>{order.date}</Text>
      </View>

      <Text style={styles.restaurant}>{order.restaurant}</Text>
      <Text style={styles.item}>{order.item}</Text>

      <View style={styles.footer}>
        <Text style={styles.amount}>{order.amount}</Text>
        <Text style={styles.reorder}>Reorder →</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    fontWeight: "700",
    fontSize: 12,
  },

  date: {
    color: "#BBB",
    fontSize: 12,
  },

  restaurant: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  item: {
    color: "#888",
    marginTop: 4,
    fontSize: 14,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },

  amount: {
    color: "#FF6B35",
    fontWeight: "700",
    fontSize: 16,
  },

  reorder: {
    color: "#FF6B35",
    fontWeight: "600",
    fontSize: 14,
  },
});