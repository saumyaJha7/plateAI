import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

import { setBoardingStatus } from "../storage/authStorage";

type OnBoardingScreenProps = {
  setHasSeenBoarding: (value: boolean) => void;
};

const OnBoardingScreen = ({ setHasSeenBoarding }: OnBoardingScreenProps) => {
  const navigation: any = useNavigation();

  const handleGetStarted = async () => {
    setHasSeenBoarding(true);
    await setBoardingStatus(true);
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>PlateAI</Text>

        <Text style={styles.subtitle}>
          AI that knows{'\n'}
          what you'll love to eat.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <Text style={styles.featureEmoji}>🤖</Text>

          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>
              AI Powered Recommendations
            </Text>

            <Text style={styles.featureSubtitle}>
              Discover meals tailored to your taste.
            </Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureEmoji}>⚡</Text>

          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>
              Fast Delivery
            </Text>

            <Text style={styles.featureSubtitle}>
              Hot and fresh food delivered in minutes.
            </Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureEmoji}>📍</Text>

          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>
              Live Order Tracking
            </Text>

            <Text style={styles.featureSubtitle}>
              Track your order from kitchen to doorstep.
            </Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <Pressable
        style={styles.button}
        onPress={handleGetStarted}
      >
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F5",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },

  topSection: {
    alignItems: "center",
    marginTop: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  title: {
    fontSize: 38,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 28,
  },

  featuresContainer: {
    gap: 18,
  },

  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    elevation: 3,
  },

  featureEmoji: {
    fontSize: 30,
    marginRight: 16,
  },

  featureTextContainer: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },

  featureSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  button: {
    backgroundColor: "#FF6B35",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    elevation: 4,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});

