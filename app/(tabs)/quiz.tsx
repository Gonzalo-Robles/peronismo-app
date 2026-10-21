import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, Platform } from "react-native";
import { Gradient } from "../../components/Gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { colors, type } from "../../constants/theme";
import { quiz } from "../../constants/data";

export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = quiz[index];

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.answer) setScore((s) => s + 1);
    if (Platform.OS !== "web") {
      // feedback háptico en dispositivo
      try {
        const Haptics = require("expo-haptics");
        Haptics.notificationAsync(
          i === current.answer
            ? Haptics.NotificationFeedbackType.Success
            : Haptics.NotificationFeedbackType.Error
        );
      } catch {}
    }
  };

  const next = () => {
    if (index + 1 >= quiz.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / quiz.length) * 100);
    const msg =
      pct === 100
        ? "¡Perfecto! Sos 100% peronista joven 🇦🇷"
        : pct >= 66
        ? "¡Muy bien! Casi lo sabés todo 💪"
        : "¡Buen intento! Volvé a leer la historia y probá de nuevo 📚";
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.bg }}
        contentContainerStyle={styles.center}
      >
        <Animated.View entering={FadeInDown}>
          <Gradient
            from={colors.deep}
            to={colors.sky}
            style={styles.resultCard}
          >
            <Text style={styles.resultEmoji}>🎯</Text>
            <Text style={styles.resultScore}>
              {score} / {quiz.length}
            </Text>
            <Text style={styles.resultMsg}>{msg}</Text>
          </Gradient>
        </Animated.View>
        <Pressable onPress={restart} style={({ pressed }) => [styles.btn, pressed && { opacity: 0.85 }]}>
          <Text style={styles.btnText}>🔄 Reiniciar quiz</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {/* progreso */}
      <View style={styles.progressRow}>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: `${((index + 1) / quiz.length) * 100}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {index + 1}/{quiz.length}
        </Text>
      </View>

      <Animated.View key={index} entering={FadeInDown.duration(250)}>
        <View style={styles.questionCard}>
          <Text style={styles.question}>{current.q}</Text>
        </View>

        <View style={{ gap: 10, marginTop: 16 }}>
          {current.options.map((opt, i) => {
            const isAnswer = i === current.answer;
            const isPicked = selected === i;
            let bg = colors.surface;
            let border = colors.border;
            let textColor = colors.text;
            if (selected !== null) {
              if (isAnswer) {
                bg = colors.okSoft;
                border = colors.ok;
                textColor = colors.ok;
              } else if (isPicked) {
                bg = colors.badSoft;
                border = colors.bad;
                textColor = colors.bad;
              }
            }
            return (
              <Pressable
                key={opt}
                onPress={() => pick(i)}
                disabled={selected !== null}
                style={({ pressed }) => [
                  styles.option,
                  { backgroundColor: bg, borderColor: border, opacity: pressed ? 0.85 : 1 },
                ]}
              >
                <Text style={[styles.optionText, { color: textColor }]}>
                  {selected !== null && isAnswer ? "✅ " : selected !== null && isPicked ? "❌ " : ""}
                  {opt}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Animated.View>

      {selected !== null && (
        <Animated.View entering={FadeInDown.duration(200)}>
          <Text style={styles.feedback}>
            {selected === current.answer
              ? "¡Correcto! 🎉"
              : "Mmm… no era esa. ¡Seguí así! 💪"}
          </Text>
          <Pressable onPress={next} style={({ pressed }) => [styles.btn, pressed && { opacity: 0.85 }]}>
            <Text style={styles.btnText}>
              {index + 1 >= quiz.length ? "Ver resultado 🏁" : "Siguiente →"}
            </Text>
          </Pressable>
        </Animated.View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 },
  progressBg: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.border,
    overflow: "hidden",
  },
  progressFill: { height: 10, borderRadius: 5, backgroundColor: colors.gold },
  progressText: { fontSize: 13, fontWeight: "700", color: colors.muted },
  questionCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  question: { fontSize: 18, fontWeight: "700", color: colors.text, lineHeight: 25 },
  option: {
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    minHeight: 52,
    justifyContent: "center",
  },
  optionText: { fontSize: 15, fontWeight: "600", lineHeight: 20 },
  feedback: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.deep,
    textAlign: "center",
    marginTop: 18,
  },
  btn: {
    backgroundColor: colors.deep,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 12,
    alignSelf: "center",
  },
  btnText: { color: colors.white, fontSize: 16, fontWeight: "800" },
  resultCard: {
    borderRadius: 24,
    padding: 32,
    alignItems: "center",
    width: "100%",
  },
  resultEmoji: { fontSize: 48 },
  resultScore: {
    fontSize: 44,
    fontWeight: "800",
    color: colors.white,
    marginTop: 8,
    letterSpacing: -1,
    fontVariant: ["tabular-nums"],
  },
  resultMsg: {
    fontSize: 16,
    lineHeight: 22,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginTop: 8,
  },
});
