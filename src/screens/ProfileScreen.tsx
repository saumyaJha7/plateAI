import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* Avatar */}

        <View style={styles.profile}>

          <Image
            source={{
              uri: "https://i.pravatar.cc/200?img=12",
            }}
            style={styles.avatar}
          />

          <Text style={styles.name}>
            Alex Johnson
          </Text>

          <Text style={styles.email}>
            alex@plateai.com
          </Text>

        </View>

        {/* Stats */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Total Orders
          </Text>

          <Text style={styles.bigNumber}>
            12
          </Text>

        </View>

        {/* Favourite Restaurants */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Favourite Restaurants
          </Text>

          <Text style={styles.listItem}>
            🍕 Pizza Paradise
          </Text>

          <Text style={styles.listItem}>
            🍔 Burger House
          </Text>

          <Text style={styles.listItem}>
            🍜 Chinese Wok
          </Text>

        </View>

        {/* Achievements */}

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            AI Insights
          </Text>

          <Text style={styles.listItem}>
            🏆 Food Explorer
          </Text>

          <Text style={styles.listItem}>
            ⭐ Premium Member
          </Text>

          <Text style={styles.listItem}>
            🔥 20 Orders Completed
          </Text>

        </View>

        <Text style={styles.version}>
          PlateAI v1.0.0
        </Text>

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

  profile: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    marginTop: 16,
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
  },

  email: {
    marginTop: 6,
    color: "#777",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },

  bigNumber: {
    fontSize: 42,
    fontWeight: "700",
    color: "#FF6B35",
  },

  listItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 12,
  },

  version: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
    color: "#888",
  },

});