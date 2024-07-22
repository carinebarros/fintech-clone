import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

type TabBarIconProps = {
  color: string;
  size: number;
};

type IconProps = TabBarIconProps & {
  name: keyof typeof FontAwesome.glyphMap;
};

const Icon = ({ name, size, color }: IconProps) => (
  <FontAwesome name={name} size={size} color={color} />
);

const HomeIcon = (props: TabBarIconProps) => (
  <Icon name="registered" {...props} />
);

const InvestIcon = (props: TabBarIconProps) => (
  <Icon name="line-chart" {...props} />
);

const TransfersIcon = (props: TabBarIconProps) => (
  <Icon name="exchange" {...props} />
);

const CryptoIcon = (props: TabBarIconProps) => (
  <Icon name="bitcoin" {...props} />
);

const LifestyleIcon = (props: TabBarIconProps) => <Icon name="th" {...props} />;

const Layout = () => (
  <Tabs
    screenOptions={{
      headerTintColor: Colors.primary,
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: HomeIcon,
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
