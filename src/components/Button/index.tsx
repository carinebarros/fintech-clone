import { Text, TouchableOpacity, View } from "react-native";
import { type ForwardedRef, forwardRef, useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  buttonTextSizes,
  buttonTextVariants,
  sizes,
  styles,
  textColor,
  variants,
} from "./styles";

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  label: string;
  labelClasses?: string;
  className?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?:
    | "default"
    | "dark"
    | "light"
    | "secondary"
    | "destructive"
    | "ghost"
    | "link";
  size: "default" | "sm" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef(
  (
    {
      label,
      labelClasses,
      className,
      icon,
      variant = "default",
      size,
      fullWidth,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<View>
  ) => {
    const containerStyle = useMemo(
      () => [
        styles.buttonContainer,
        sizes[size],
        variants[variant],
        fullWidth && styles.fullWidth,
      ],
      [fullWidth, size, variant]
    );

    const iconColor = useMemo(
      () => (icon ? textColor[variant] : undefined),
      [icon, variant]
    );

    return (
      <View ref={ref} style={containerStyle}>
        <TouchableOpacity style={styles.button} {...props}>
          {icon && <Ionicons name={icon} size={24} color={iconColor} />}
          <Text
            style={[
              styles.buttonText,
              buttonTextVariants[variant],
              buttonTextSizes[size],
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
);

export { Button };
