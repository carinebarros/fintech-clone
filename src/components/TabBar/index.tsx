import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const TabBarBackground = () => (
  <BlurView style={styles.view} intensity={100} tint="extraLight" />
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

export const tabBarStyle = {
  backgroundColor: "transparent",
  bottom: 0,
  left: 0,
  right: 0,
  elevation: 0,
  borderTopWidth: 0,
};

export default TabBarBackground;
