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
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Avatar section */}
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: "https://i.pravatar.cc/200?img=12" }}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.name}>Alex Johnson</Text>
          <Text style={styles.email}>alex@plateai.com</Text>

          <View style={styles.memberBadge}>
            <Text style={styles.memberBadgeText}>⭐ Premium Member</Text>
          </View>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={[styles.statCard, styles.statCardMiddle]}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Favourites</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2.4k</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        {/* Favourite Restaurants */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Favourite Restaurants</Text>

          {[
            { emoji: "🍕", name: "Pizza Paradise" },
            { emoji: "🍔", name: "Burger House" },
            { emoji: "🍜", name: "Chinese Wok" },
          ].map((r) => (
            <View key={r.name} style={styles.listRow}>
              <Text style={styles.listEmoji}>{r.emoji}</Text>
              <Text style={styles.listItem}>{r.name}</Text>
            </View>
          ))}
        </View>

        {/* AI Insights */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>AI Insights</Text>

          {[
            { emoji: "🏆", label: "Food Explorer" },
            { emoji: "🔥", label: "20 Orders Completed" },
            { emoji: "🤖", label: "AI Picks Active" },
          ].map((item) => (
            <View key={item.label} style={styles.listRow}>
              <Text style={styles.listEmoji}>{item.emoji}</Text>
              <Text style={styles.listItem}>{item.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.version}>PlateAI v1.0.0</Text>

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
    marginBottom: 24,
  },

  avatarWrapper: {
    borderWidth: 3,
    borderColor: "#FF6B35",
    borderRadius: 65,
    padding: 3,
    elevation: 4,
    shadowColor: "#FF6B35",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  name: {
    marginTop: 14,
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  email: {
    marginTop: 4,
    color: "#888",
    fontSize: 15,
  },

  memberBadge: {
    marginTop: 10,
    backgroundColor: "#FFF8E7",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFD700",
  },

  memberBadgeText: {
    fontSize: 13,
    color: "#B8860B",
    fontWeight: "600",
  },

  statsRow: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 18,
    marginBottom: 18,
    elevation: 3,
    overflow: "hidden",
  },

  statCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 18,
  },

  statCardMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#F0F0F0",
  },

  statNumber: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FF6B35",
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#888",
    fontWeight: "500",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#222",
  },

  listRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#F5F5F5",
  },

  listEmoji: {
    fontSize: 20,
    marginRight: 12,
    width: 28,
    textAlign: "center",
  },

  listItem: {
    fontSize: 15,
    color: "#444",
    fontWeight: "500",
  },

  version: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 32,
    color: "#BBBBBB",
    fontSize: 13,
  },
});