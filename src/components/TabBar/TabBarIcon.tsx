import { FontAwesome } from "@expo/vector-icons";

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

export const HomeIcon = (props: TabBarIconProps) => (
  <Icon name="registered" {...props} />
);

export const InvestIcon = (props: TabBarIconProps) => (
  <Icon name="line-chart" {...props} />
);

export const TransfersIcon = (props: TabBarIconProps) => (
  <Icon name="exchange" {...props} />
);

export const CryptoIcon = (props: TabBarIconProps) => (
  <Icon name="bitcoin" {...props} />
);

export const LifestyleIcon = (props: TabBarIconProps) => (
  <Icon name="th" {...props} />
);
