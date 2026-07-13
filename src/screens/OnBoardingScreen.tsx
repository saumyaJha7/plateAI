import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const features = [
    {
      emoji: "🤖",
      title: "AI Powered Recommendations",
      subtitle: "Discover meals tailored to your taste.",
    },
    {
      emoji: "⚡",
      title: "Fast Delivery",
      subtitle: "Hot and fresh food delivered in minutes.",
    },
    {
      emoji: "📍",
      title: "Live Order Tracking",
      subtitle: "Track your order from kitchen to doorstep.",
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>PlateAI</Text>

        <Text style={styles.subtitle}>
          AI that knows{"\n"}what you'll love to eat.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.featuresContainer}>
        {features.map((f) => (
          <View key={f.title} style={styles.featureCard}>
            <View style={styles.featureIconWrapper}>
              <Text style={styles.featureEmoji}>{f.emoji}</Text>
            </View>

            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>{f.title}</Text>
              <Text style={styles.featureSubtitle}>{f.subtitle}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* CTA Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleGetStarted}
        android_ripple={{ color: "#e05a28" }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
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
    paddingTop: 60,
    paddingBottom: 36,
  },

  topSection: {
    alignItems: "center",
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 16,
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#1F2937",
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 17,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 28,
  },

  featuresContainer: {
    gap: 14,
  },

  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
    elevation: 3,
  },

  featureIconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#FFF1EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  featureEmoji: {
    fontSize: 26,
  },

  featureTextContainer: {
    flex: 1,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  featureSubtitle: {
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 3,
    lineHeight: 18,
  },

  button: {
    backgroundColor: "#FF6B35",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    elevation: 4,
    overflow: "hidden",
  },

  buttonPressed: {
    backgroundColor: "#e05a28",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
