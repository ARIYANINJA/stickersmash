import * as React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Button as ButtonPaper, useTheme } from "react-native-paper";

import sizes from "../styles/sizes";

export function Button({
  children,
  mode = "contained",
  style,
  ...props
}: {
  children: string;
  disabled?: boolean;
  mode?: "contained" | "outlined";
  onPress: () => void;
  icon?: string;
  style?: ViewStyle;
}) {
  const { colors } = useTheme();
  return (
    <ButtonPaper
      {...props}
      contentStyle={styles.button}
      labelStyle={[
        styles.label,
        { color: mode == "outlined" ? colors.primary : "white" },
      ]}
      mode={mode}
      style={[{ borderColor: colors.primary, borderWidth: 1 }, style]}
      uppercase={false}
    >
      {children}
    </ButtonPaper>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
  },
  label: {
    fontSize: sizes.fontSize,
    fontWeight: "bold",
  },
});

export default Button;
