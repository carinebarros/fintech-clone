import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useBalanceStore } from "@/store/balanceStorage";

import Colors from "@/constants/Colors";

import {
  cardsStyles,
  cashbackStyles,
  recentStyles,
  spentStyles,
  styles,
} from "./styles";

interface TileProps {
  id: string;
  onLongPress: () => void;
}

const Tile = ({ id }: TileProps) => {
  const { transactions } = useBalanceStore();

  if (id === "spent") {
    return (
      <View style={styles.container} pointerEvents="none">
        <Text style={spentStyles.title}>Spent this month</Text>
        <Text style={spentStyles.details}>R$ 1024</Text>
      </View>
    );
  }

  if (id === "cashback") {
    return (
      <View
        style={[styles.container, cashbackStyles.container]}
        pointerEvents="none"
      >
        <View style={cashbackStyles.content}>
          <View style={cashbackStyles.highlightWrapper}>
            <Text style={cashbackStyles.highlight}>5%</Text>
          </View>
          <Text style={cashbackStyles.title}>Cashback</Text>
        </View>
      </View>
    );
  }

  if (id === "recent") {
    return (
      <View style={styles.container} pointerEvents="none">
        <View>
          <Text style={recentStyles.title}>Recent transaction</Text>

          {transactions.length === 0 && (
            <Text style={recentStyles.empty}>No transactions</Text>
          )}

          {transactions.length > 0 && (
            <>
              <Text style={recentStyles.amount}>
                R$ {transactions[transactions.length - 1].amount}
              </Text>
              <Text style={recentStyles.transaction}>
                {transactions[transactions.length - 1].title}
              </Text>
            </>
          )}
        </View>
      </View>
    );
  }

  if (id === "cards") {
    return (
      <View style={styles.container} pointerEvents="none">
        <Text style={cardsStyles.title}>Cards</Text>
        <Ionicons
          name="card"
          size={50}
          color={Colors.primaryMuted}
          style={cardsStyles.icon}
        />
      </View>
    );
  }
};

export default Tile;
