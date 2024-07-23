import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ListHeaderProps = {
  logo?: string;
  subtitle?: string;
};

const ListHeader = ({ logo, subtitle }: ListHeaderProps) => (
  <>
    <View style={styles.header}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image source={{ uri: logo }} style={{ width: 60, height: 60 }} />
    </View>

    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[defaultStyles.pillButtonSmall, styles.primaryButton]}
      >
        <Ionicons name="add" size={24} color={Colors.white} />
        <Text style={[defaultStyles.buttonText, styles.primaryButtonText]}>
          Buy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[defaultStyles.pillButtonSmall, styles.secondaryButton]}
      >
        <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        <Text style={[defaultStyles.buttonText, styles.secondaryButtonText]}>
          Receive
        </Text>
      </TouchableOpacity>
    </View>
  </>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.gray,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    margin: 12,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    gap: 16,
  },
  primaryButtonText: {
    color: Colors.white,
  },
  secondaryButton: {
    backgroundColor: Colors.primaryMuted,
    flexDirection: "row",
    gap: 16,
  },
  secondaryButtonText: {
    color: Colors.primary,
  },
});

export default ListHeader;
