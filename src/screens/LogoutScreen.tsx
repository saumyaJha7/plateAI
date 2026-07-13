import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { logout } from "../storage/authStorage";

type Props = {
  setIsAuthenticated: (value: boolean) => void;
  setHasSeenBoarding: (value: boolean) => void;
};

export default function LogoutScreen({
  setIsAuthenticated,
  setHasSeenBoarding,
}: Props) {
  const navigation: any = useNavigation();

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      setHasSeenBoarding(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrapper}>
          <Ionicons name="log-out-outline" size={44} color="#FF6B35" />
        </View>

        <Text style={styles.title}>Logout</Text>

        <Text style={styles.subtitle}>
          Are you sure you want to logout from PlateAI?
        </Text>

        <View style={styles.buttons}>
          <Pressable
            style={({ pressed }) => [
              styles.cancelButton,
              pressed && { opacity: 0.7 },
            ]}
            onPress={() => navigation.goBack()}
            android_ripple={{ color: "#FFE8DF" }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.logoutButton,
              pressed && { opacity: 0.85 },
            ]}
            onPress={handleLogout}
            android_ripple={{ color: "#e05a28" }}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
    elevation: 4,
  },

  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFF1EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  title: {
    marginTop: 12,
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    marginTop: 12,
    textAlign: "center",
    color: "#777",
    fontSize: 15,
    lineHeight: 24,
  },

  buttons: {
    flexDirection: "row",
    marginTop: 30,
    gap: 12,
  },

  cancelButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#FF6B35",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
    overflow: "hidden",
  },

  logoutButton: {
    flex: 1,
    backgroundColor: "#FF6B35",
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: "center",
    overflow: "hidden",
  },

  cancelText: {
    color: "#FF6B35",
    fontWeight: "700",
    fontSize: 16,
  },

  logoutText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
});