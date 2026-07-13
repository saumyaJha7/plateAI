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

    <DrawerContentScrollView {...props}>

      <View style={styles.header}>

        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Alex Johnson
        </Text>

        <Text style={styles.email}>
          alex@plateai.com
        </Text>

      </View>

      <DrawerItemList {...props} />

    </DrawerContentScrollView>

  );

}

const styles = StyleSheet.create({

  header: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: "#EEE",
    marginBottom: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  name: {
    marginTop: 12,
    fontWeight: "700",
    fontSize: 20,
  },

  email: {
    color: "#666",
    marginTop: 4,
  },

});