import React from "react";
import { TextInput as TextInputPaper } from "react-native-paper";
import { textStyles } from "../styles/styles";

export function TextInput({
  style,
  ...props
}: React.ComponentProps<typeof TextInputPaper>) {
  return (
    <TextInputPaper
      mode="outlined"
      {...props}
      style={[textStyles.text, style && style]}
    />
  );
}

export default TextInput;
