import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMemo, useState } from "react";
import { Link, useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

import { Button } from "@/components/Button";

const SignUp = () => {
  const router = useRouter();
  const { signUp } = useSignUp();

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

  const onSignUp = async () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    try {
      await signUp?.create({ phoneNumber: fullPhoneNumber });
      signUp!.preparePhoneNumberVerification();

      router.push(`/verify/${fullPhoneNumber}`);
    } catch (error) {
      console.error("Sign up error: ", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.fullWidth}
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

        <Link href="/login" replace asChild>
          <Button
            label="Already have an account? Log in"
            variant="link"
            size="default"
          />
        </Link>

        <View style={styles.fullWidth} />

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
});

export default SignUp;
