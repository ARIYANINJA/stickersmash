import React from "react";
import { StyleProp, StyleSheet, ViewStyle, View } from "react-native";

export function Container({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.container, style && style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default Container;
