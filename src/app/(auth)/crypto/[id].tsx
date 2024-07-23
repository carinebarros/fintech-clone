import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

import { useInfoById } from "@/queries/useInfoById";

import SectionHeader from "@/components/CryptoDetails/SectionHeader";
import ListHeader from "@/components/CryptoDetails/ListHeader";
import Section from "@/components/CryptoDetails/Section";

const CryptoDetails = () => {
  const headerHeight = useHeaderHeight();
  const { id } = useLocalSearchParams();
  const { data } = useInfoById(id);
  const [activeIndex, setActiveIndex] = useState<number>();

  const handleActiveIndex = (index: number) => setActiveIndex(index);

  const details = data?.[id as string];

  const renderSectionHeader = useCallback(
    () => (
      <SectionHeader
        activeIndex={activeIndex!}
        handleClick={handleActiveIndex}
      />
    ),
    [activeIndex, handleActiveIndex]
  );

  const renderListHeaderComponent = useCallback(
    () => <ListHeader logo={details?.logo} subtitle={details?.symbol} />,
    [details]
  );

  const renderItem = useCallback(
    ({ item }: { item: unknown }) => <Section item={item} />,
    []
  );

  return (
    <>
      <Stack.Screen options={{ title: details?.name ?? "" }} />
      <SectionList
        style={{ marginTop: headerHeight }}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={(i) => i.title}
        sections={[{ data: [{ title: "Details" }] }]}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={renderListHeaderComponent}
        renderItem={renderItem}
      />
    </>
  );
};

export default CryptoDetails;
