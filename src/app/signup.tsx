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

const SignUp = () => {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const keyboardVerticalOffset = useMemo(
    () => (Platform.OS === "ios" ? 80 : 0),
    []
  );

  const buttonVariant = useMemo(
    () => (phoneNumber !== "" ? "default" : "secondary"),
    [phoneNumber]
  );

  const onSignUp = async () => {};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started!</Text>
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

        <Link href="/login" replace asChild>
          <Button
            label="Already have an account? Log in"
            variant="link"
            size="default"
          />
        </Link>

        <View style={{ flex: 1 }} />

        <Button
          label="Sign up"
          size="default"
          variant={buttonVariant}
          onPress={onSignUp}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
});

export default SignUp;
