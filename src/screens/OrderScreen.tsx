import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import { orders } from "../data/Orders";
import OrderCard from "../components/OrderCard";

export default function OrdersScreen() {

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>
        📦 My Orders
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {

          orders.map((order) => (

            <OrderCard

              key={order.id}

              order={order}

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
    marginBottom: 24,
    color: "#222",
  },

});