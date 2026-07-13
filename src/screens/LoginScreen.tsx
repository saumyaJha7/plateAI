import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setAuthStatus } from "../storage/authStorage";

type LoginScreenProps = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const LoginScreen = ({ setIsAuthenticated }: LoginScreenProps) => {
  const [email, setEmail] = useState("demo@plateai.com");
  const [password, setPassword] = useState("123456");

  const onLogin = async () => {
    setIsAuthenticated(true);
    await setAuthStatus(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>
          Sign in to continue discovering{"\n"}
          delicious meals.
        </Text>
      </View>

      <View>
        <Text style={styles.label}>Email Address</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </Pressable>
      </View>

      <View>
        <Pressable style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>

        <View style={styles.demoCard}>
          <Text style={styles.demoTitle}>Demo Credentials</Text>

          <Text style={styles.demoText}>Email: demo@plateai.com</Text>

          <Text style={styles.demoText}>Password: 123456</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
    paddingHorizontal: 24,
    justifyContent: "space-evenly",
  },

  topSection: {
    alignItems: "center",
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 10,
    textAlign: "center",
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    color: "#374151",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    elevation: 2,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 14,
    color: "#FF6B35",
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: "#FF6B35",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 18,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  demoCard: {
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    elevation: 2,
  },

  demoTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#1F2937",
  },

  demoText: {
    color: "#6B7280",
    fontSize: 15,
    marginBottom: 4,
  },
});
