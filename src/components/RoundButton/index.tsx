import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type RoundButtonProps = {
  text: string;
  icon: typeof Ionicons.defaultProps;
  onPress: () => void;
};

const RoundButton = ({ text, icon, onPress }: RoundButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.circle}>
      <Ionicons name={icon} size={30} color={Colors.dark} />
    </View>
    <Text style={styles.label}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.dark,
  },
});

export default RoundButton;
