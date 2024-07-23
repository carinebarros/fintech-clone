import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

import { useBalanceStore } from "@/store/balanceStorage";

import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";

import Dropdown from "@/components/Dropdown";
import RoundButton from "@/components/RoundButton";
import WidgetList from "@/components/SortableList/WidgetList";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const { balance, clearTransactions, runTransaction, transactions } =
    useBalanceStore();

  const onAddMoney = () => {
    const amount =
      Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);

    runTransaction({
      id: Math.random().toString(),
      amount,
      date: new Date().toISOString(),
      title: amount > 0 ? "Added money" : "Removed money",
    });
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.balance}>{balance()}</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundButton text="Add money" icon="add" onPress={onAddMoney} />
        <RoundButton
          text="Exchange"
          icon="refresh"
          onPress={clearTransactions}
        />
        <RoundButton text="Details" icon="list" onPress={onAddMoney} />
        <Dropdown />
      </View>
      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transactions}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: Colors.gray }}>
            No transactions yet
          </Text>
        )}

        {transactions.toReversed().map((transaction) => (
          <View
            key={transaction.id}
            style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
          >
            <View style={styles.circle}>
              <Ionicons
                name={transaction.amount > 0 ? "add" : "remove"}
                size={24}
                color={Colors.primary}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "400" }}>{transaction.title}</Text>
              <Text style={{ color: Colors.gray, fontSize: 12 }}>
                {new Date(transaction.date).toLocaleString()}
              </Text>
            </View>
            <Text>R$ {Math.abs(transaction.amount)}</Text>
          </View>
        ))}
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 60,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 30,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: Colors.white,
    borderRadius: 16,
    gap: 16,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;
