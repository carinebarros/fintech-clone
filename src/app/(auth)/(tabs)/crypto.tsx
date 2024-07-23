import { useMemo } from "react";
import { Text, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { ScrollView } from "react-native-gesture-handler";

import { Currency as CurrencyType } from "@/interfaces/crypto";

import { useListings } from "@/queries/useListings";
import { useInfoById } from "@/queries/useInfoById";

import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";

import Currency from "@/components/Currency";

const Page = () => {
  const currencies = useListings();
  const headerHeight = useHeaderHeight();

  const ids = useMemo(
    () =>
      currencies.data?.map((currency: CurrencyType) => currency.id).join(","),
    [currencies]
  );

  const { data } = useInfoById(ids);

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text style={defaultStyles.sectionHeader}>Latest Crypto</Text>
      <View style={defaultStyles.block}>
        {currencies.data?.map((currency: CurrencyType) => (
          <Currency
            key={currency.id}
            logo={data?.[currency.id].logo!}
            {...currency}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Page;
