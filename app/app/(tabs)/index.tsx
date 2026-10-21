import { View, Text, ScrollView, StyleSheet, Pressable, Platform } from "react-native";
import { useRouter } from "expo-router";
import { Gradient } from "../../components/Gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { colors, type } from "../../constants/theme";
import { stats, quotes } from "../../constants/data";

const sections = [
  { emoji: "📜", label: "Historia", sub: "Línea de tiempo", route: "/(tabs)/historia", bg: colors.deep },
  { emoji: "📖", label: "Las 20 Verdades", sub: "Doctrina explicada", route: "/(tabs)/verdades", bg: colors.gold },
  { emoji: "✊", label: "Logros Sociales", sub: "Derechos que perduran", route: "/(tabs)/logros", bg: colors.sky },
  { emoji: "🚀", label: "Tecnología", sub: "Hecho en Argentina", route: "/(tabs)/tecnologia", bg: colors.gold },
  { emoji: "🎯", label: "Quiz", sub: "Probá lo que sabés", route: "/(tabs)/quiz", bg: colors.deep2 },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO */}
      <Gradient
        from={colors.deep}
        to={colors.sky}
        style={styles.hero}
      >
        <Text style={styles.heroFlag}>🇦🇷</Text>
        <Text style={type.title}>Peronismo Joven</Text>
        <Text style={styles.heroSub}>La historia que no te contaron</Text>
        <View style={styles.heroPill}>
          <Text style={styles.heroPillText}>✦ Conocé tus derechos</Text>
        </View>
      </Gradient>

      <View style={styles.content}>
        {/* STATS */}
        <Text style={[type.label, styles.sectionLabel]}>Datos que suman</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingRight: 20 }}
        >
          {stats.map((s, i) => (
            <Animated.View key={s.title} entering={FadeInDown.delay(i * 80)}>
              <View style={styles.statCard}>
                <Text style={styles.statEmoji}>{s.emoji}</Text>
                <Text style={styles.statTitle}>{s.title}</Text>
                <Text style={styles.statYear}>{s.year}</Text>
              </View>
            </Animated.View>
          ))}
        </ScrollView>

        {/* SECCIONES */}
        <Text style={[type.label, styles.sectionLabel]}>Explorá</Text>
        <View style={styles.grid}>
          {sections.map((s, i) => (
            <Animated.View key={s.label} entering={FadeInDown.delay(i * 60)}>
              <Pressable
                onPress={() => router.push(s.route)}
                style={({ pressed }) => [
                  styles.sectionCard,
                  { backgroundColor: s.bg, opacity: pressed ? 0.85 : 1 },
                ]}
              >
                <Text style={styles.sectionEmoji}>{s.emoji}</Text>
                <Text style={styles.sectionTitle}>{s.label}</Text>
                <Text style={styles.sectionSub}>{s.sub}</Text>
              </Pressable>
            </Animated.View>
          ))}
        </View>

        {/* FRASES */}
        <Text style={[type.label, styles.sectionLabel]}>Para pensar</Text>
        {quotes.map((q, i) => (
          <Animated.View key={q.author} entering={FadeInDown.delay(i * 100)}>
            <View style={styles.quoteCard}>
              <Text style={styles.quoteMark}>“</Text>
              <Text style={styles.quoteText}>{q.text}</Text>
              <Text style={styles.quoteAuthor}>— {q.author}</Text>
            </View>
          </Animated.View>
        ))}

        {/* BANNER */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            📌 Cifras y fechas basadas en registros históricos de dominio público.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingTop: Platform.OS === "ios" ? 64 : 48,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  heroFlag: { fontSize: 44, marginBottom: 8 },
  heroSub: {
    fontSize: 16,
    lineHeight: 22,
    color: "rgba(255,255,255,0.85)",
    marginTop: 4,
  },
  heroPill: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 14,
  },
  heroPillText: { color: colors.white, fontSize: 13, fontWeight: "700" },
  content: { padding: 20, gap: 8 },
  sectionLabel: { marginTop: 16, marginBottom: 10 },
  statCard: {
    width: 220,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 4,
  },
  statEmoji: { fontSize: 28 },
  statTitle: { fontSize: 15, fontWeight: "700", color: colors.text, lineHeight: 20 },
  statYear: { fontSize: 13, fontWeight: "700", color: colors.gold },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  sectionCard: {
    width: "47.5%",
    aspectRatio: 1.05,
    borderRadius: 22,
    padding: 14,
    justifyContent: "flex-end",
  },
  sectionEmoji: { fontSize: 30, marginBottom: 6 },
  sectionTitle: { fontSize: 16, fontWeight: "800", color: colors.white, lineHeight: 20 },
  sectionSub: { fontSize: 12, color: "rgba(255,255,255,0.8)", lineHeight: 16 },
  quoteCard: {
    backgroundColor: colors.goldSoft,
    borderRadius: 20,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: colors.gold,
  },
  quoteMark: { fontSize: 28, fontWeight: "800", color: colors.gold, lineHeight: 30 },
  quoteText: { fontSize: 15, lineHeight: 21, color: colors.text, fontStyle: "italic" },
  quoteAuthor: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.deep,
    marginTop: 8,
  },
  banner: {
    backgroundColor: colors.skySoft,
    borderRadius: 16,
    padding: 14,
    marginTop: 8,
  },
  bannerText: { fontSize: 12, lineHeight: 17, color: colors.deep, textAlign: "center" },
});
