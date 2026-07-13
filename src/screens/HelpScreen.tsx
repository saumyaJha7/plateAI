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
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>
          ❓ Help & Support
        </Text>

        <Text style={styles.subtitle}>
          Need assistance?{"\n"}
          We're here to help you.
        </Text>

        {/* Contact Card */}

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons
              name="mail-outline"
              size={22}
              color="#FF6B35"
            />

            <Text style={styles.text}>
              support@plateai.com
            </Text>
          </View>

          <View style={styles.row}>
            <Ionicons
              name="call-outline"
              size={22}
              color="#FF6B35"
            />

            <Text style={styles.text}>
              +91 98765 43210
            </Text>
          </View>
        </View>

        {/* FAQ */}

        <Text style={styles.sectionTitle}>
          Frequently Asked Questions
        </Text>

        <FAQItem question="How do I place an order?" />

        <FAQItem question="Can I cancel my order?" />

        <FAQItem question="How can I track my delivery?" />

        <FAQItem question="How do refunds work?" />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Contact Support
          </Text>
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
    marginTop: 10,
    color: "#666",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },

  sectionTitle: {
    marginBottom: 18,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 30,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  text: {
    marginLeft: 16,
    fontSize: 16,
    color: "#444",
  },

  button: {
    backgroundColor: "#FF6B35",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 18,
    marginTop: 20,
    marginBottom: 40,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },

});