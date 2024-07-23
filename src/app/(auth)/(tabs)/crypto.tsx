import { Image, Text, View } from "react-native";

import { Currency } from "@/interfaces/crypto";
import { useListings } from "@/queries/useListings";
import { useMemo } from "react";
import { useInfoById } from "@/app/api/queries/useInfoById";

const Page = () => {
  const currencies = useListings();

  const ids = useMemo(
    () => currencies.data?.map((currency: Currency) => currency.id).join(","),
    [currencies]
  );

  const { data } = useInfoById(ids);

  return (
    <View>
      {currencies.data?.map((currency: Currency) => (
        <View key={currency.id} style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: data?.[currency.id].logo }}
            style={{ width: 32, height: 32 }}
          />
          <Text>{currency.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Page;
