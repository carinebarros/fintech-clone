import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMemo, useState } from "react";
import { Link } from "expo-router";

import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

import { Button } from "@/components/Button";

const Login = () => {
  const [countryCode, setCountryCode] = useState("+55");
  const [phoneNumber, setPhoneNumber] = useState("");

  const keyboardVerticalOffset = useMemo(
    () => (Platform.OS === "ios" ? 80 : 0),
    []
  );

  const buttonVariant = useMemo(
    () => (phoneNumber !== "" ? "default" : "secondary"),
    [phoneNumber]
  );

  const onSignIn = async () => {};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you a confirmation code there
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 0.15 }]}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
            onChangeText={setCountryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Button
          label="Continue"
          size="default"
          variant={buttonVariant}
          onPress={onSignIn}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 40,
  },
  input: {
    padding: 20,
    fontSize: 20,
    backgroundColor: Colors.lightGray,
    borderRadius: 16,
  },
});

export default Login;
