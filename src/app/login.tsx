import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMemo, useState } from "react";

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
      style={styles.fullWidth}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.countryCode]}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
            onChangeText={setCountryCode}
          />
          <TextInput
            style={[styles.input, styles.fullWidth]}
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

        <View style={styles.divisorContainer}>
          <View style={[styles.divisorLine, styles.fullWidth]} />
          <Text style={styles.divisorText}>or</Text>
          <View style={[styles.divisorLine, styles.fullWidth]} />
        </View>

        <Button
          label="Continue with email"
          size="default"
          variant="light"
          icon="mail"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    flex: 1,
  },
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
  countryCode: {
    flex: 0.15,
  },
  divisorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginVertical: 20,
  },
  divisorLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.gray,
  },
  divisorText: {
    color: Colors.gray,
    fontSize: 20,
  },
});

export default Login;
