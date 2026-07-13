import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  order: {
    restaurant: string;
    item: string;
    amount: string;
    status: string;
    date: string;
  };
};

export default function OrderCard({
  order,
}: Props) {

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

  return (

    <View style={styles.card}>

      <View
  style={[
    styles.badge,
    {
      backgroundColor: getStatusColor(),
    },
  ]}
>
  <Text style={styles.badgeText}>
    {order.status}
  </Text>
</View>

      <Text style={styles.restaurant}>
        {order.restaurant}
      </Text>

      <Text style={styles.item}>
        {order.item}
      </Text>

      <View style={styles.footer}>

        <Text style={styles.amount}>
          {order.amount}
        </Text>

        <Text style={styles.date}>
          {order.date}
        </Text>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
  },

  status: {
    fontWeight: "700",
    marginBottom: 10,
  },

  restaurant: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  item: {
    color: "#666",
    marginTop: 6,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  amount: {
    color: "#FF6B35",
    fontWeight: "700",
    fontSize: 16,
  },

  date: {
    color: "#888",
    fontSize: 13,
  },

  badge: {
  alignSelf: "flex-start",
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 20,
  marginBottom: 12,
},

badgeText: {
  color: "#FFF",
  fontWeight: "700",
  fontSize: 12,
},
});