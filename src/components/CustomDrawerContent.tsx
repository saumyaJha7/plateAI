import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scroll}>

      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.name}>Alex Johnson</Text>
        <Text style={styles.email}>alex@plateai.com</Text>
      </View>

      <View style={styles.itemsContainer}>
        <DrawerItemList {...props} />
      </View>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    paddingTop: 36,
    paddingBottom: 24,
    backgroundColor: "#FFF1EB",
    borderBottomWidth: 1,
    borderBottomColor: "#FFD9C8",
    marginBottom: 8,
  },

  avatarWrapper: {
    borderWidth: 3,
    borderColor: "#FF6B35",
    borderRadius: 50,
    padding: 2,
  },

  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },

  name: {
    marginTop: 12,
    fontWeight: "700",
    fontSize: 18,
    color: "#222",
  },

  email: {
    color: "#888",
    marginTop: 3,
    fontSize: 13,
  },

  itemsContainer: {
    flex: 1,
    paddingTop: 4,
  },
});