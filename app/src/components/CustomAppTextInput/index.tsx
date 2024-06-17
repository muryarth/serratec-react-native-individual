import { TextInput } from "react-native";
import { useState } from "react";
import { styles } from "./style";

interface PropsComponent {
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeValue: (value: string) => void;
}

const CustomAppTextInput = ({
  value,
  placeholder,
  placeholderTextColor = "#000",
  secureTextEntry = false,
  onChangeValue,
}: PropsComponent) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeValue}
      />
    </>
  );
};

export { CustomAppTextInput };
