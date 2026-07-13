import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Replace with your logo later */}
      <Text style={styles.logo}>🍔</Text>

      <Text style={styles.title}>Food Delivery</Text>

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
    backgroundColor: "#FFFFFF",
  },

  logo: {
    fontSize: 80,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 16,
  },

  loader: {
    marginTop: 32,
  },
});