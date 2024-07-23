import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Colors from "@/constants/Colors";

type SectionHeaderProps = {
  activeIndex: number;
  handleClick: (index: number) => void;
};

type CategoryProps = SectionHeaderProps & {
  index: number;
  item: string;
};

const SectionHeader = ({ activeIndex, handleClick }: SectionHeaderProps) => {
  const categories = ["Details", "Markets", "Historical Data", "News"];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {categories?.map((item, index) => (
        <Category
          key={item}
          activeIndex={activeIndex}
          handleClick={handleClick}
          item={item}
          index={index}
        />
      ))}
    </ScrollView>
  );
};

const Category = ({ activeIndex, handleClick, index, item }: CategoryProps) => {
  const handlePress = () => handleClick(index);

  const className =
    activeIndex === index
      ? {
          button: styles.categoriesBtnActive,
          text: styles.categoryTextActive,
        }
      : {
          button: styles.categoriesBtn,
          text: styles.categoryText,
        };

  return (
    <TouchableOpacity key={item} onPress={handlePress} style={className.button}>
      <Text style={className.text}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: Colors.background,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.gray,
  },
  categoryTextActive: {
    fontSize: 14,
    color: Colors.black,
  },
  categoriesBtn: {
    padding: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  categoriesBtnActive: {
    padding: 10,
    paddingHorizontal: 14,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
});

export default SectionHeader;
