import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Gradient, gradientPresets } from "../../components/Gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { colors, type } from "../../constants/theme";
import { tech } from "../../constants/data";

export default function TecnologiaScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[type.heading, { marginBottom: 4 }]}>🚀 Tecnología</Text>
      <Text style={[type.caption, { marginBottom: 20 }]}>
        Inventos y industria nacional que sorprendieron al mundo.
      </Text>

      <View style={{ gap: 14 }}>
        {tech.map((t, i) => (
          <Animated.View key={t.title} entering={FadeInDown.delay(i * 60)}>
            <View style={styles.cardWrap}>
              <Gradient
                from={i % 2 === 0 ? gradientPresets.deep.from : gradientPresets.sky.from}
                to={i % 2 === 0 ? gradientPresets.deep.to : gradientPresets.sky.to}
                style={styles.card}
              >
                <View style={styles.head}>
                  <Text style={styles.emoji}>{t.emoji}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{t.title}</Text>
                    {t.year && <Text style={styles.year}>{t.year}</Text>}
                  </View>
                </View>
                <Text style={styles.text}>{t.text}</Text>
              </Gradient>
            </View>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardWrap: { borderRadius: 22, overflow: "hidden" },
  card: { borderRadius: 22, padding: 18 },
  head: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 10 },
  emoji: { fontSize: 34 },
  title: { fontSize: 18, fontWeight: "800", color: colors.white, lineHeight: 23 },
  year: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.gold,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    marginTop: 2,
  },
  text: { fontSize: 14, lineHeight: 20, color: "rgba(255,255,255,0.88)" },
});
