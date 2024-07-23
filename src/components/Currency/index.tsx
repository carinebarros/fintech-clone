import Colors from "@/constants/Colors";
import { Currency as CurrencyType } from "@/interfaces/crypto";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type CurrencyProps = CurrencyType & {
  logo: string;
};

const Currency = ({ id, logo, name, quote, symbol }: CurrencyProps) => {
  const color = useMemo(
    () => (quote.BRL.percent_change_1h > 0 ? "green" : "red"),
    [quote.BRL.percent_change_1h]
  );

  const iconName = useMemo(
    () => (quote.BRL.percent_change_1h > 0 ? "caret-up" : "caret-down"),
    [quote.BRL.percent_change_1h]
  );

  return (
    <Link href={`/crypto/${id}/`} asChild>
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: logo }} style={styles.logo} />
        <View style={styles.info}>
          <Text style={styles.infoName}>{name}</Text>
          <Text style={styles.infoSymbol}>{symbol}</Text>
        </View>
        <View style={styles.price}>
          <Text>{quote.BRL.price.toFixed(2)} R$</Text>
          <View style={styles.change}>
            <Ionicons name={iconName} size={16} color={color} />
            <Text style={{ color }}>
              {quote.BRL.percent_change_1h.toFixed(2)} %
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  logo: {
    width: 32,
    height: 32,
  },
  info: {
    flex: 1,
    gap: 6,
  },
  infoName: {
    fontWeight: "600",
    color: Colors.dark,
  },
  infoSymbol: {
    color: Colors.gray,
  },
  price: {
    gap: 6,
    alignItems: "flex-end",
  },
  change: {
    flexDirection: "row",
    gap: 4,
  },
});

export default Currency;
