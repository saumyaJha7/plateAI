import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setAuthStatus } from "../storage/authStorage";

type LoginScreenProps = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const LoginScreen = ({ setIsAuthenticated }: LoginScreenProps) => {
  const [email, setEmail] = useState("demo@plateai.com");
  const [password, setPassword] = useState("123456");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const onLogin = async () => {
    setIsAuthenticated(true);
    await setAuthStatus(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Top section */}
          <View style={styles.topSection}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Sign in to continue discovering{"\n"}delicious meals.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={[styles.input, emailFocused && styles.inputFocused]}
              placeholder="Enter your email"
              placeholderTextColor="#BCC0C8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />

            <Text style={[styles.label, { marginTop: 18 }]}>Password</Text>
            <TextInput
              style={[styles.input, passwordFocused && styles.inputFocused]}
              placeholder="Enter password"
              placeholderTextColor="#BCC0C8"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />

            <Pressable>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
          </View>

          {/* Bottom */}
          <View style={styles.bottom}>
            <Pressable
              style={({ pressed }) => [
                styles.loginButton,
                pressed && styles.loginButtonPressed,
              ]}
              onPress={onLogin}
              android_ripple={{ color: "#e05a28" }}
            >
              <Text style={styles.loginText}>Login</Text>
            </Pressable>

            <View style={styles.demoCard}>
              <Text style={styles.demoTitle}>🔑  Demo Credentials</Text>
              <View style={styles.demoRow}>
                <Text style={styles.demoKey}>Email</Text>
                <Text style={styles.demoValue}>demo@plateai.com</Text>
              </View>
              <View style={styles.demoRow}>
                <Text style={styles.demoKey}>Password</Text>
                <Text style={styles.demoValue}>123456</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
  },

  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: "space-evenly",
  },

  topSection: {
    alignItems: "center",
    marginBottom: 8,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 8,
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 15,
    lineHeight: 24,
  },

  form: {
    marginBottom: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#374151",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 15,
    fontSize: 16,
    color: "#111",
    borderWidth: 1.5,
    borderColor: "#EFEFEF",
    elevation: 1,
  },

  inputFocused: {
    borderColor: "#FF6B35",
    elevation: 3,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 12,
    color: "#FF6B35",
    fontWeight: "600",
    fontSize: 14,
  },

  bottom: {},

  loginButton: {
    backgroundColor: "#FF6B35",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 17,
    marginBottom: 20,
    elevation: 4,
    overflow: "hidden",
  },

  loginButtonPressed: {
    backgroundColor: "#e05a28",
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  demoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },

  demoTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10,
    color: "#374151",
  },

  demoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  demoKey: {
    fontSize: 13,
    color: "#AAA",
    fontWeight: "500",
  },

  demoValue: {
    fontSize: 13,
    color: "#555",
    fontWeight: "600",
  },
});
