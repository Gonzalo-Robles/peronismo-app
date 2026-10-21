import { View, StyleSheet, type ViewStyle, type StyleProp } from "react-native";
import { colors } from "../constants/theme";

/**
 * Gradiente simulado con capas de View (sin dependencias nativas).
 * Va de `from` (arriba) a `to` (abajo) en bandas suaves.
 */
export function Gradient({
  from,
  to,
  style,
  children,
}: {
  from: string;
  to: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) {
  const bands = [0.12, 0.28, 0.45, 0.62, 0.8, 1];
  return (
    <View style={[{ backgroundColor: from, overflow: "hidden" }, style]}>
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {bands.map((o, i) => (
          <View key={i} style={{ flex: 1, backgroundColor: to, opacity: o }} />
        ))}
      </View>
      {children}
    </View>
  );
}

export const gradientPresets = {
  hero: { from: colors.deep, to: colors.sky },
  deep: { from: colors.deep, to: colors.deep2 },
  sky: { from: colors.deep2, to: colors.sky },
};
