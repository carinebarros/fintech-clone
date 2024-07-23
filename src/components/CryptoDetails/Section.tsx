import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { StyleSheet, Text, View } from "react-native";

type SectionProps = {
  item: unknown;
};

type Ticker = {
  price: number;
};

const Section = ({ item }: SectionProps) => {
  const tickers: Ticker[] = [];
  const categories: unknown[] = [];
  const isActive = true;
  // const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'), 12);

  const axisOptions = {
    // font,
    tickCount: 5,
    labelOffset: { x: -2, y: 0 },
    labelColor: Colors.gray,
    formatYLabel: (v: number) => `${v} BRL`,
    formatXLabel: (ms: number) => new Date(ms),
    // formatXLabel: (ms) => format(new Date(ms), "MM/yy"),
  };

  return (
    <>
      <View style={[defaultStyles.block, { height: 500 }]}>
        {tickers && (
          <>
            {!isActive && (
              <View>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: Colors.dark,
                  }}
                >
                  {tickers[tickers.length - 1].price.toFixed(2)} €
                </Text>
                <Text style={{ fontSize: 18, color: Colors.gray }}>Today</Text>
              </View>
            )}
            {isActive && (
              <View>
                {/* <AnimatedTextInput
                    editable={false}
                    underlineColorAndroid="transparent"
                    style={styles.animatedText}
                    animatedProps={animatedText}
                  />
                  <AnimatedTextInput
                    editable={false}
                    underlineColorAndroid="transparent"
                    style={styles.animatedDateText}
                    animatedProps={animatedDateText}
                  /> */}
              </View>
            )}
            {/* <CartesianChart
                chartPressState={state}
                axisOptions={axisOptions}
                data={tickers!}
                xKey="timestamp"
                yKeys={["price"]}
              >
                {({ points }) => (
                  <>
                    <Line
                      points={points.price}
                      color={Colors.primary}
                      strokeWidth={3}
                    />
                    {isActive && (
                      <ToolTip
                        x={state.x.position}
                        y={state.y.price.position}
                      />
                    )}
                  </>
                )}
              </CartesianChart> */}
          </>
        )}
      </View>
      <View style={[defaultStyles.block, { marginTop: 20 }]}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={{ color: Colors.gray }}>
          Bitcoin is a decentralized digital currency, without a central bank or
          single administrator, that can be sent from user to user on the
          peer-to-peer bitcoin network without the need for intermediaries.
          Transactions are verified by network nodes through cryptography and
          recorded in a public distributed ledger called a blockchain.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.gray,
  },
  animatedText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.dark,
  },
  animatedDateText: {
    fontSize: 18,
    color: Colors.gray,
  },
});

export default Section;
