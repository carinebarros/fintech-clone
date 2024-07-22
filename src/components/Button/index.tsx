import { Text, TouchableOpacity, View } from "react-native";

import {
  buttonTextSizes,
  buttonTextVariants,
  sizes,
  styles,
  variants,
} from "./styles";

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  label: string;
  labelClasses?: string;
  className?: string;
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

const Button = ({
  label,
  labelClasses,
  className,
  variant = "default",
  size,
  fullWidth,
  ...props
}: ButtonProps) => (
  <View
    style={[
      styles.button,
      sizes[size],
      variants[variant],
      fullWidth ? { flex: 1 } : {},
    ]}
  >
    <TouchableOpacity {...props}>
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

export { Button };
