import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import SettingRow from "../components/SettingRow";

import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.heading}>
          ⚙️ Settings
        </Text>

        {/* General */}

        <Text style={styles.sectionTitle}>
          ⚙️ General
        </Text>

        <View style={styles.card}>

          <SettingRow
            icon="moon-outline"
            title="Dark Mode"
            right={<Switch value={false} />}
          />

          <SettingRow
            icon="notifications-outline"
            title="Notifications"
            right={<Switch value={true} />}
          />

          <SettingRow
            icon="language-outline"
            title="Language"
            right={<Text style={styles.value}>English</Text>}
          />

        </View>

        {/* Account */}

        <Text style={styles.sectionTitle}>
         👤 Account
        </Text>

        <View style={styles.card}>

          <SettingRow
            icon="person-outline"
            title="Edit Profile"
            showArrow
          />

          <SettingRow
            icon="lock-closed-outline"
            title="Change Password"
            showArrow
          />

          <SettingRow
            icon="location-outline"
            title="Saved Addresses"
            showArrow
          />

        </View>

        {/* About */}

        <Text style={styles.sectionTitle}>
          ℹ️ About
        </Text>

        <View style={styles.card}>

          <SettingRow
            icon="star-outline"
            title="Rate PlateAI"
            showArrow
          />

          <SettingRow
            icon="document-text-outline"
            title="Privacy Policy"
            showArrow
          />

          <SettingRow
            icon="information-circle-outline"
            title="Version"
            right={
              <Text style={styles.value}>
                1.0.0
              </Text>
            }
          />

        </View>

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
    marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 24,
    elevation: 3,
  },

  value: {
    color: "#666",
    fontSize: 15,
  },

});