import { Button } from "@/components/Button";
import CodeField from "@/components/CodeField";
import { defaultStyles } from "@/constants/Styles";
import {
  isClerkAPIResponseError,
  useSignIn,
  useSignUp,
} from "@clerk/clerk-expo";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

type SearchParams = Record<string, string | string[]>;

type LocalSearchParams = SearchParams & {
  phone: string;
  signin?: string;
};

const VerifyPhone = () => {
  const { phone, signin } = useLocalSearchParams<LocalSearchParams>();
  const [code, setCode] = useState("");
  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === CELL_COUNT) {
      console.log("code", code);

      if (signin === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const verifyCode = async () => {
    try {
      await signUp!.attemptPhoneNumberVerification({
        code,
      });
      await setActive!({ session: signUp!.createdSessionId });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));

      if (
        isClerkAPIResponseError(error) &&
        error.errors[0].code === "form_identifier_not_found"
      ) {
        Alert.alert("Error", error.errors[0].message);
      }
    }
  };

  const verifySignIn = async () => {
    try {
      await signIn!.attemptFirstFactor({
        strategy: "phone_code",
        code,
      });
      await setActive!({ session: signIn!.createdSessionId });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));

      if (isClerkAPIResponseError(err)) {
        Alert.alert("Error", err.errors[0].message);
      }
    }
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>6-digit code</Text>
      <Text style={defaultStyles.descriptionText}>
        Code sent to {phone} unless you already have an account
      </Text>

      <CodeField
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        getCellOnLayoutHandler={getCellOnLayoutHandler}
      />

      <Link href="/login" replace asChild>
        <Button
          label="Already have an account? Log in"
          variant="link"
          size="default"
        />
      </Link>
    </View>
  );
};

export default VerifyPhone;
