import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FAQItem from "../components/FAQItem";

import { Ionicons } from "@expo/vector-icons";

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Help & Support</Text>

        <Text style={styles.subtitle}>
          Need assistance? We're here to help you.
        </Text>

        {/* Contact Card */}
        <View style={styles.card}>
          <Pressable
            style={({ pressed }) => [styles.row, pressed && { opacity: 0.7 }]}
            android_ripple={{ color: "#FFE8DF" }}
          >
            <View style={styles.contactIcon}>
              <Ionicons name="mail-outline" size={20} color="#FF6B35" />
            </View>
            <View>
              <Text style={styles.contactLabel}>Email us</Text>
              <Text style={styles.contactText}>support@plateai.com</Text>
            </View>
          </Pressable>

          <View style={styles.rowDivider} />

          <Pressable
            style={({ pressed }) => [styles.row, pressed && { opacity: 0.7 }]}
            android_ripple={{ color: "#FFE8DF" }}
          >
            <View style={styles.contactIcon}>
              <Ionicons name="call-outline" size={20} color="#FF6B35" />
            </View>
            <View>
              <Text style={styles.contactLabel}>Call us</Text>
              <Text style={styles.contactText}>+91 99999 99999</Text>
            </View>
          </Pressable>
        </View>

        {/* FAQ */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        <FAQItem
          question="How do I place an order?"
          answer="Browse restaurants on the Home tab, pick a dish and tap 'Add'. Review your cart and tap 'Proceed to Checkout'."
        />

        <FAQItem
          question="Can I cancel my order?"
          answer="Yes, you can cancel your order within 2 minutes of placing it. Go to My Orders and tap 'Cancel'."
        />

        <FAQItem
          question="How can I track my delivery?"
          answer="Once your order is confirmed, go to My Orders. You'll see live status updates from 'Preparing' to 'On The Way'."
        />

        <FAQItem
          question="How do refunds work?"
          answer="Refunds are processed within 5–7 business days to your original payment method. Contact support for any delays."
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          android_ripple={{ color: "#e05a28" }}
        >
          <Ionicons name="chatbubble-outline" size={18} color="#FFF" />
          <Text style={styles.buttonText}>  Contact Support</Text>
        </Pressable>

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
    color: "#222",
  },

  subtitle: {
    marginTop: 8,
    color: "#888",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },

  sectionTitle: {
    marginBottom: 14,
    marginTop: 4,
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 28,
    elevation: 3,
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },

  rowDivider: {
    height: 1,
    backgroundColor: "#F5F5F5",
    marginHorizontal: -16,
  },

  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFF1EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  contactLabel: {
    fontSize: 12,
    color: "#AAA",
    fontWeight: "500",
    marginBottom: 2,
  },

  contactText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#FF6B35",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginTop: 16,
    marginBottom: 40,
    overflow: "hidden",
  },

  buttonPressed: {
    backgroundColor: "#e05a28",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
});