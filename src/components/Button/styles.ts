import { StyleSheet } from "react-native";

import Colors from "@/constants/Colors";

type Variants = {
  [key: string]: object;
};

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  button: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "600",
  },
  fullWidth: {
    flex: 1,
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

export const textColor = {
  default: Colors.white,
  dark: Colors.white,
  light: Colors.dark,
  secondary: Colors.white,
  destructive: Colors.white,
  ghost: Colors.black,
  link: Colors.primary,
};

export const buttonTextVariants = StyleSheet.create({
  default: {
    color: textColor.default,
  },
  dark: {
    color: textColor.dark,
  },
  light: {
    color: textColor.light,
  },
  secondary: {
    color: textColor.secondary,
  },
  destructive: {
    color: textColor.destructive,
  },
  ghost: {
    color: textColor.ghost,
  },
  link: {
    color: textColor.link,
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
