import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack, usePathname, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Colors from "@/constants/Colors";

const queryClient = new QueryClient();

import * as SecureStore from "expo-secure-store";

// Cache the Clerk JWT
export const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const router = useRouter();
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (isSignedIn && !inAuthGroup) {
      router.replace("/(auth)/(tabs)/crypto");
    }
  }, [isLoaded, isSignedIn, pathname, segments]);

  if (!loaded || !isLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: HeaderLeft,
          headerRight: HeaderRight,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: HeaderLeft,
          headerRight: HeaderRight,
        }}
      />
      <Stack.Screen
        name="verify/[phone]"
        options={{
          title: "",
          headerBackTitle: "",
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: HeaderLeft,
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          title: "Help",
          presentation: "modal",
        }}
      />
      <Stack.Screen name="(auth)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(auth)/crypto/[id]"
        options={{
          title: "",
          headerLeft: HeaderLeft,
          headerRight: HeaderRight,
          headerLargeTitle: true,
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

const HeaderLeft = () => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={router.back}>
      <Ionicons name="arrow-back" size={34} color={Colors.dark} />
    </TouchableOpacity>
  );
};

const HeaderRight = () => (
  <Link href="/help" asChild>
    <TouchableOpacity>
      <Ionicons name="help-circle-outline" size={34} color={Colors.dark} />
    </TouchableOpacity>
  </Link>
);

const RootLayoutNav = () => (
  <ClerkProvider publishableKey={publishableKey}>
    <ClerkLoaded>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="light" />
          <InitialLayout />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </ClerkLoaded>
  </ClerkProvider>
);

export default RootLayoutNav;
