import { View, Text, ScrollView, StyleSheet } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { colors, type } from "../../constants/theme";
import { achievements } from "../../constants/data";

export default function LogrosScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[type.heading, { marginBottom: 4 }]}>✊ Logros sociales</Text>
      <Text style={[type.caption, { marginBottom: 20 }]}>
        Derechos que nacieron en esos años y hoy damos por sentados.
      </Text>

      <View style={styles.grid}>
        {achievements.map((a, i) => (
          <Animated.View key={a.title} entering={FadeInDown.delay(i * 60)}>
            <View style={styles.card}>
              <View style={styles.emojiWrap}>
                <Text style={styles.emoji}>{a.emoji}</Text>
              </View>
              <Text style={styles.title}>{a.title}</Text>
              {a.year && <Text style={styles.year}>{a.year}</Text>}
              <Text style={styles.text}>{a.text}</Text>
            </View>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  card: {
    width: "47.5%",
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emojiWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.skySoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  emoji: { fontSize: 24 },
  title: { fontSize: 15, fontWeight: "800", color: colors.text, lineHeight: 19 },
  year: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.gold,
    marginTop: 2,
    letterSpacing: 0.3,
  },
  text: { fontSize: 13, lineHeight: 18, color: colors.muted, marginTop: 6 },
});
