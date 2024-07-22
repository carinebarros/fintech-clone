import React from "react";
import { StyleSheet, View } from "react-native";

import { MARGIN, Positions } from "./Config";
import Tile from "./Tile";
import SortableList from "./index";

const tiles = [
  {
    id: "spent",
  },
  {
    id: "cashback",
  },
  {
    id: "recent",
  },
  {
    id: "cards",
  },
];

const WidgetList = () => {
  const handleDragEnd = (positions: Positions) =>
    console.log(JSON.stringify(positions, null, 2));

  return (
    <View style={styles.container}>
      <SortableList editing={true} onDragEnd={handleDragEnd}>
        {[...tiles].map((tile, index) => (
          <Tile
            onLongPress={() => true}
            key={tile.id + "-" + index}
            id={tile.id}
          />
        ))}
      </SortableList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: MARGIN,
    marginBottom: 80,
  },
});

export default WidgetList;
