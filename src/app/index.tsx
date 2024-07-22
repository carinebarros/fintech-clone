import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Colors from "@/constants/Colors";

import { Button } from "@/components/Button";

const HomePage = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          source={{ uri: assets[0].uri }}
          style={styles.video}
          isMuted
          isLooping
          shouldPlay
        />
      )}

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Ready to change the way you money?
        </Text>
      </View>

      <View style={styles.buttons}>
        <Link href="/login" asChild>
          <Button label="Login in" size="default" variant="dark" fullWidth />
        </Link>

        <Link href="/signup" asChild>
          <Button label="Sign up" size="default" variant="light" fullWidth />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    marginTop: 80,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

export default HomePage;
