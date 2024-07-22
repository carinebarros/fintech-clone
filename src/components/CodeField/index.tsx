import Colors from "@/constants/Colors";
import React, { forwardRef, Fragment } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import {
  CodeField as CodeFieldBase,
  CodeFieldProps as CodeFieldBaseProps,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

type CodeFieldProps = Partial<CodeFieldBaseProps> & {
  getCellOnLayoutHandler: ReturnType<typeof useClearByFocusCell>[1];
};

const CodeField = forwardRef(
  (
    { getCellOnLayoutHandler, ...props }: CodeFieldProps,
    ref: React.ForwardedRef<TextInput>
  ) => (
    <CodeFieldBase
      ref={ref}
      {...props}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Fragment key={index}>
          <View
            style={[styles.cellRoot, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>

          {index === 2 ? (
            <View key={`separator-${index}`} style={styles.separator} />
          ) : null}
        </Fragment>
      )}
    />
  )
);

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: 20,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 12,
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
  },
  cellText: {
    color: Colors.black,
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    paddingBottom: 8,
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: Colors.gray,
    alignSelf: "center",
  },
});

export default CodeField;
