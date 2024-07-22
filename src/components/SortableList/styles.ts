import { StyleSheet } from "react-native";
import { SIZE } from "./Config";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: SIZE - 20,
    height: 150,
    padding: 14,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

export const spentStyles = StyleSheet.create({
  title: {
    color: Colors.gray,
    fontWeight: "500",
    fontSize: 16,
  },
  details: {
    paddingTop: 10,
    color: Colors.dark,
    fontWeight: "bold",
    fontSize: 26,
  },
});

export const cashbackStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  highlightWrapper: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  highlight: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    color: Colors.gray,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export const recentStyles = StyleSheet.create({
  title: {
    color: Colors.gray,
    fontWeight: "500",
    fontSize: 16,
  },
  empty: {
    color: Colors.gray,
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
  },
  amount: {
    color: Colors.dark,
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 10,
  },
  transaction: {
    color: Colors.gray,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export const cardsStyles = StyleSheet.create({
  title: {
    color: Colors.gray,
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    marginTop: 20,
    alignSelf: "center",
  },
});
