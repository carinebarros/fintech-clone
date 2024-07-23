import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";

import TabBarBackground, { tabBarStyle } from "@/components/TabBar";
import {
  CryptoIcon,
  HomeIcon,
  InvestIcon,
  LifestyleIcon,
  TransfersIcon,
} from "@/components/TabBar/TabBarIcon";
import Header from "@/components/Header";

const Layout = () => (
  <Tabs
    screenOptions={{
      headerTintColor: Colors.primary,
      tabBarBackground: TabBarBackground,
      tabBarStyle: {
        ...tabBarStyle,
        position: "absolute",
      },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: HomeIcon,
        header: Header,
        headerTransparent: true,
      }}
    />
    <Tabs.Screen
      name="invest"
      options={{
        title: "Invest",
        tabBarIcon: InvestIcon,
      }}
    />
    <Tabs.Screen
      name="transfers"
      options={{
        title: "Transfers",
        tabBarIcon: TransfersIcon,
      }}
    />
    <Tabs.Screen
      name="lifestyle"
      options={{
        title: "Lifestyle",
        tabBarIcon: LifestyleIcon,
      }}
    />
    <Tabs.Screen
      name="crypto"
      options={{
        title: "Crypto",
        tabBarIcon: CryptoIcon,
      }}
    />
  </Tabs>
);

export default Layout;
