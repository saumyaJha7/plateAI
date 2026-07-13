import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  setIsAuthenticated: (value : boolean) => void;
};

import {
  logout,
} from "../storage/authStorage";

export default function LogoutScreen({
  setIsAuthenticated,
}: Props) {

  const handleLogout = async () => {

    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }

  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Ionicons
          name="log-out-outline"
          size={70}
          color="#FF6B35"
        />

        <Text style={styles.title}>
          Logout
        </Text>

        <Text style={styles.subtitle}>
          Are you sure you want to logout from PlateAI?
        </Text>

        <View style={styles.buttons}>

          <Pressable
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </Pressable>

          <Pressable
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutText}>
              Logout
            </Text>
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

  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    marginTop: 14,
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    lineHeight: 24,
  },

  buttons: {
    flexDirection: "row",
    marginTop: 32,
  },

  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#FF6B35",
    borderRadius: 14,
    paddingVertical: 16,
    marginRight: 10,
    alignItems: "center",
  },

  logoutButton: {
    flex: 1,
    backgroundColor: "#FF6B35",
    borderRadius: 14,
    paddingVertical: 16,
    marginLeft: 10,
    alignItems: "center",
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