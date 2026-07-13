import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>PlateAI</Text>

      <Text style={styles.subtitle}>AI that knows what you'll love</Text>

      <ActivityIndicator
        size="large"
        color="#FF6B35"
        style={styles.loader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8F5",
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#1F2937",
    letterSpacing: 0.5,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#9CA3AF",
    letterSpacing: 0.2,
  },

  loader: {
    marginTop: 48,
  },
});