import { StyleSheet } from "react-native";

import Colors from "@/constants/Colors";

type Variants = {
  [key: string]: object;
};

export const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
  },
});

export const variants: Variants = StyleSheet.create({
  default: {
    backgroundColor: Colors.primary,
  },
  dark: {
    backgroundColor: Colors.dark,
  },
  light: {
    backgroundColor: Colors.white,
  },
  secondary: {
    backgroundColor: Colors.primaryMuted,
  },
  destructive: {
    backgroundColor: "red",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  link: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});

export const sizes = StyleSheet.create({
  default: {
    padding: 10,
    height: 60,
  },
  sm: {
    height: 32,
    paddingHorizontal: 8,
  },
  lg: {
    height: 48,
    paddingHorizontal: 24,
  },
});

export const buttonTextVariants = StyleSheet.create({
  default: {
    color: Colors.white,
  },
  dark: {
    color: Colors.white,
  },
  light: {
    color: Colors.dark,
  },
  secondary: {
    color: Colors.gray,
  },
  destructive: {
    color: Colors.white,
  },
  ghost: {
    color: Colors.primary,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});

export const buttonTextSizes = StyleSheet.create({
  default: {
    fontSize: 22,
    fontWeight: "500",
  },
  sm: {
    fontSize: 14,
  },
  lg: {
    fontSize: 20,
  },
});
