import {
  Alert,
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
import { useRouter } from "expo-router";
import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Login = () => {
  const router = useRouter();
  const { signIn } = useSignIn();

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

  const signInChannels = useMemo(
    () => ({
      [SignInType.Phone]: async () => {
        try {
          const fullPhoneNumber = `${countryCode}${phoneNumber}`;

          const { supportedFirstFactors } = await signIn!.create({
            identifier: fullPhoneNumber,
          });

          const firstPhoneFactor = supportedFirstFactors.find(
            (factor) => factor.strategy === "phone_code"
          );

          const { phoneNumberId } = firstPhoneFactor!;

          await signIn!.prepareFirstFactor({
            strategy: "phone_code",
            phoneNumberId,
          });

          router.push({
            pathname: "/verify/[phone]",
            params: { phone: fullPhoneNumber, signin: "true" },
          });
        } catch (error) {
          console.error("Sign in error: ", JSON.stringify(error, null, 2));

          if (
            isClerkAPIResponseError(error) &&
            error.errors[0].code === "form_identifier_not_found"
          ) {
            Alert.alert("Error", error.errors[0].message);
          }
        }
      },
      [SignInType.Email]: async () => "Email",
      [SignInType.Google]: async () => "Google",
      [SignInType.Apple]: async () => "Apple",
    }),
    [countryCode, phoneNumber]
  );

  const onSignIn = (type: SignInType) => signInChannels[type]();

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
          onPress={() => onSignIn(SignInType.Phone)}
        />

        <View style={styles.divisorContainer}>
          <View style={[styles.divisorLine, styles.fullWidth]} />
          <Text style={styles.divisorText}>or</Text>
          <View style={[styles.divisorLine, styles.fullWidth]} />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            label="Continue with email"
            size="default"
            variant="light"
            icon="mail"
            onPress={() => onSignIn(SignInType.Email)}
          />
          <Button
            label="Continue with Google"
            size="default"
            variant="light"
            icon="logo-google"
            onPress={() => onSignIn(SignInType.Google)}
          />
          <Button
            label="Continue with Apple"
            size="default"
            variant="light"
            icon="logo-apple"
            onPress={() => onSignIn(SignInType.Apple)}
          />
        </View>
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
  buttonsContainer: {
    gap: 20,
  },
});

export default Login;
