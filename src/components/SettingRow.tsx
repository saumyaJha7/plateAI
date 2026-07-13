import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  right?: React.ReactNode;
  showArrow?: boolean;
};

export default function SettingRow({

  icon,
  title,
  right,
  showArrow,

}: Props) {

  return (

    <View style={styles.row}>

      <View style={styles.left}>

        <Ionicons
          name={icon}
          size={22}
          color="#FF6B35"
        />

        <Text style={styles.title}>
          {title}
        </Text>

      </View>

      {right}

      {

        showArrow && (

          <Ionicons

            name="chevron-forward"

            size={18}

            color="#999"

          />

        )

      }

    </View>

  );

}

const styles = StyleSheet.create({

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: "#EEE",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    marginLeft: 14,
    fontSize: 16,
    color: "#222",
  },

});