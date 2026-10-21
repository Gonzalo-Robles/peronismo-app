import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { colors, type } from "../../constants/theme";
import { timeline } from "../../constants/data";

export default function HistoriaScreen() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[type.heading, { marginBottom: 4 }]}>📜 Línea de tiempo</Text>
      <Text style={[type.caption, { marginBottom: 20 }]}>
        Tocá cada año para leer la historia completa.
      </Text>

      {timeline.map((item, i) => {
        const isOpen = open === i;
        return (
          <Animated.View key={item.year} entering={FadeInDown.delay(i * 60)}>
            <View style={styles.row}>
              {/* columna izquierda */}
              <View style={styles.left}>
                <View style={[styles.dot, isOpen && styles.dotOpen]} />
                {i < timeline.length - 1 && <View style={styles.line} />}
              </View>
              {/* tarjeta */}
              <Pressable
                onPress={() => setOpen(isOpen ? null : i)}
                style={({ pressed }) => [
                  styles.card,
                  isOpen && styles.cardOpen,
                  pressed && { opacity: 0.9 },
                ]}
              >
                <View style={styles.cardHead}>
                  <Text style={styles.year}>{item.year}</Text>
                  <Text style={styles.emoji}>{item.emoji}</Text>
                </View>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.title}>{item.title}</Text>
                {isOpen && <Text style={styles.text}>{item.text}</Text>}
                {!isOpen && (
                  <Text style={styles.hint}>Tocá para leer más ↓</Text>
                )}
              </Pressable>
            </View>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", marginBottom: 14 },
  left: { width: 28, alignItems: "center" },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.sky,
    marginTop: 18,
    borderWidth: 3,
    borderColor: colors.white,
  },
  dotOpen: { backgroundColor: colors.gold },
  line: { flex: 1, width: 3, backgroundColor: colors.sky, marginTop: 4 },
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 14,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardOpen: {
    borderColor: colors.gold,
    backgroundColor: colors.goldSoft,
  },
  cardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  year: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.deep,
    letterSpacing: -0.5,
    fontVariant: ["tabular-nums"],
  },
  emoji: { fontSize: 22 },
  date: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.gold,
    textTransform: "uppercase",
    letterSpacing: 0.3,
    marginTop: 2,
  },
  title: { fontSize: 16, fontWeight: "700", color: colors.text, marginTop: 4, lineHeight: 21 },
  text: { fontSize: 14, lineHeight: 20, color: colors.muted, marginTop: 8 },
  hint: { fontSize: 12, color: colors.muted, marginTop: 6 },
});
